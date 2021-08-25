const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const { read } = require('../controllers/field');
const User = require('../models/user');
const Field = require('../models/field');
const Scene = require('../models/scene');
const Shot = require('../models/shot');

// this fixes a deprecation warning
mongoose.set('useFindAndModify', false);
// mongoose.Promise = global.Promise;

// beforeAll(() => {
mongoose.connect('mongodb://localhost/dreamfieldtest4', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .once('open', () => {
    console.log('connection open');
  })
  .on('error', (err) => {
    console.warn('MongoDB connection error: ' + err);
  });
// });
describe('GET / ', () => {
  beforeAll(() => {
    const { users, fields, scenes, shots } = mongoose.connection.collections;
    //  users.drop(() => fields.drop(() => scenes.drop(() => shots.drop())));
    users.drop();
    fields.drop();
    scenes.drop();
    shots.drop();
  });

  test('Create user', async () => {
    const user = new User({
      name: 'Joe',
      email: 'test@test.com',
      password: 'test',
    });
    await user.save();

    expect(user.id).toBeDefined();
  });

  test('Create field', async () => {
    const user = await User.findOne({ name: 'Joe' });

    const field = await new Field({
      name: user.name,
      slug: 'test',
      creator: user._id,
      description: 'test',
    });
    await field.save();
    expect(field.id).toBeDefined();
  });

  test('Creating scene', async () => {
    const user = await User.findOne({ name: 'Joe' });
    const field = await Field.findOne({ name: user.name });

    /**
     *  Create a scene
     */
    const scene = await new Scene({
      sceneName: 'test',
      description: 'test',
      forProject: field._id,
    });
    await scene.save();
    expect(scene.id).toBeDefined();

    /**
     *  Add scene to field
     */
    await Field.findByIdAndUpdate(scene.forProject, {
      $push: { scenes: scene._id },
    });
    const foundField = await Field.findById(scene.forProject);
    expect(foundField.scenes).toHaveLength(1);
  });

  test('Create shot', async () => {
    //  const user = await User.findOne({ name: 'Joe' });
    // const field = await Field.findOne({ name: user.name });
    const scene = await Scene.findOne({ sceneName: 'test' });

    // const {shotQuery} = query.body
    const shotQuery = {
      forScene: scene._id,
      complexity: 'medium',
      shotNumber: 1,
      shotName: 'test shot',
    };

    /**
     * Create a shot
     */
    const shot = await new Shot(shotQuery);
    await shot.save();
    expect(shot.id).toBeDefined();

    /**
     * Save shot to scene
     */
    const foundScene = await Scene.findById(scene._id);
    foundScene.shotList.push({
      shotId: shot._id,
      shotName: shot.shotName,
      shotNumber: shot.shotNumber,
      shottest: 'tho',
    });
    //  await console.log('UPDATED SCENE AFTER SHOT CREATION: ', foundScene);
    foundScene.save();
    expect(foundScene.shotList).toHaveLength(1);
  });

  test('Add artist to shot', async () => {
    const scene = await Scene.findOne({ sceneName: 'test' });
    const shot = await Shot.findOne({ forScene: scene._id });

    const artist = new User({ name: 'ArtGuy', role: ['artist'] });
    //  shot.shotName = 'hmm'
    //   console.log(shot)

    shot.contributors.push({
      contributorId: artist._id,
      role: 'artist', // make enum for artists, boards, editor
      name: artist.name,
    });
    shot.save();

    //  console.log('SHOT: ', shot);

    /**
     * Save shot to scene
     */
    //   const updatedScene = await Scene.findByIdAndUpdate(scene._id, {
    //     $set: { shotList: {
    //        shotId: shot._id,
    //        shotName: shot.shotName,
    //        shotNumber: shot.shotNumber,
    //        shottest: 'tho 2',
    //      } },
    //   });
    //  const updatedScene = await Scene.findById(scene._id);
    //  updatedScene.shotList.push({
    //    shotId: shot._id,
    //    shotName: shot.shotName,
    //    shotNumber: shot.shotNumber,
    //  });
    //  updatedScene.save();

    //  console.log('Updated scene', updatedScene);
    //  expect(updatedScene.shotList).toHaveLength(1);
  });

  test('Update shot', async () => {
     const scene = await Scene.findOne({ sceneName: 'test' });
     const shotUpdate = {
        description: 'This is an update test'
     }

   //   const shot = await Shot.findOne({ forScene: scene._id });
   const shot = await Shot.updateOne({forScene: scene._id}, shotUpdate);
   // await shot.update(shotUpdate); 
   // res.json(shot);
   const updatedShot = await Shot.findOne({forScene: scene._id});
   await console.log('UPDATED SHOT: ', updatedShot);
  })

  //  test to delete shot
  test('Delete shot', async () => {
    const scene = await Scene.findOne({ sceneName: 'test' });
    //  console.log(scene)
    //  console.log('SCENE: ', scene.shotList)
    const shot = await Shot.findOne({ forScene: scene._id });
     await Shot.findByIdAndRemove(shot._id);

   //   console.log('SHOT NAME: ', shot._id);

    const updatedScene = await Scene.findByIdAndUpdate(
      scene._id,
      { $pull: { shotList: { shotId: shot._id } } }, {new: true}
    );

   //  console.log('UPDATED SCENE: ', updatedScene);
    expect(updatedScene.shotList).toHaveLength(0);

    //  COUNT OF SHOTS
    const { shots } = mongoose.connection.collections;
    const countedShots = await shots.find({}).count();
   //  console.log('SHOTS COLLECTION: ', countedShots);
  });

  //   // test to update shotNumber in shot and scene

  //   // test to get shots

  //   // test to get one shot

//   upload boards
test('Upload board', async () => {
   // let { data } = await axios.post('/api/boards/upload-image', {
   //    smallImage: uri,
   //    fullImage: file,
   //  });

   
   
})
});
