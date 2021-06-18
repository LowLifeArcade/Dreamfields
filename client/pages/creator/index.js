import CreatorRoute from '../../components/routes/CreatorRoute';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import Button from '../../components/Button';
import router from 'next/router';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const CreatorIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [projects, setProjects] = useState([
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1603344204980-4edb0ea63148?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Intentionally ',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Pizza',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'ggggagagag',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'eeeeeeee',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'ggggggg',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'aaaaaaaa',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'some other',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1622601803994-c70eb8ed6dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Paul Saves All',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      name: 'Zuccini',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
      name: 'Treasure',
      slug: '',
    },
    {
      id: '',
      avatarImg: '',
      name: 'Add New',
      slug: '',
    },
  ]);
  const [favorites, setFavorites] = useState([
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      title: 'Pizza',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80',
      title: 'Zuccini',
      slug: '',
    },
    {
      id: '',
      avatarImg:
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=838&q=80',
      title: 'Treasure',
      slug: '',
    },
  ]);

  return (
    <CreatorRoute>
      <DashboardLayout items={projects} title="Creator Dashboard">
        <h1>Welcome back {user && user.name}</h1>
        <Button
          color="#276a72"
          onClick={() => router.push('/creator/field/create')}
          buttonName="New Field"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, sint sunt magnam praesentium aliquam perspiciatis esse cumque quidem itaque unde eius consequuntur, voluptatibus commodi tempora adipisci quis nisi assumenda? Odio cum reprehenderit vitae saepe est enim distinctio voluptatem deleniti, voluptate eum, facilis recusandae iure, accusamus fuga iusto corrupti ipsam voluptatibus eligendi maiores? Similique tenetur nisi tempore. Fugiat fuga quia ex pariatur repellendus labore, impedit qui suscipit ipsam ab, quis deserunt, optio provident est aliquid accusantium nam nostrum adipisci modi cum dolores. Esse, laboriosam molestias. Adipisci in ducimus tempora voluptatem incidunt iure beatae deserunt rem natus fuga totam, nam magnam inventore assumenda exercitationem deleniti doloribus animi vero quis sunt velit, expedita molestias perferendis. Commodi reprehenderit impedit necessitatibus autem ab nulla error provident alias a enim pariatur, omnis, atque ut explicabo voluptatem quasi quae laboriosam neque? Sequi labore optio nostrum tempore nemo minus, provident nulla voluptas, qui cupiditate voluptates neque sint corrupti fugit? Sint illo aliquam atque ut reiciendis quia, nemo magni, voluptatum doloremque molestiae dolores. Porro ex, voluptate ipsam odio sint placeat repellat quae, odit tempora nulla obcaecati autem, minus omnis cumque quam modi commodi quis. Sunt dolorum mollitia quasi at expedita aspernatur voluptatem quidem nobis rem consectetur eveniet nostrum nam deleniti necessitatibus, dicta est neque id autem dolore officia ea eum nisi hic? Explicabo molestiae doloremque doloribus reprehenderit? Qui unde molestiae laboriosam quam eaque, deserunt distinctio perferendis illum harum eum ex. Nisi accusamus possimus inventore nam reprehenderit hic beatae sapiente odit ipsa maiores, accusantium vitae distinctio. Quidem a illo quasi qui nam accusantium placeat illum soluta cumque saepe maxime ipsum amet eveniet et consectetur assumenda perspiciatis, sunt ab voluptatibus delectus? Temporibus aperiam minima magnam veritatis accusamus excepturi! Fuga similique accusantium vitae reiciendis fugiat repellendus nisi adipisci, qui cum assumenda asperiores. Maiores id odit deleniti tenetur veritatis voluptas voluptates debitis excepturi, optio cupiditate distinctio, dicta ab veniam! Expedita voluptate iure soluta iusto illo fugiat. Architecto quos provident ea tempora pariatur? Quisquam laboriosam rem repudiandae aut magnam, recusandae itaque asperiores a ducimus optio molestiae nisi. Pariatur eaque aspernatur iste quod maxime laudantium laboriosam excepturi nam dolorem. Natus officiis magnam eaque omnis quas blanditiis ab sapiente tenetur eveniet reiciendis sunt nostrum rerum impedit ratione error voluptates doloribus praesentium, distinctio tempora. Et laboriosam nisi hic quidem. Libero cum odit harum fuga reprehenderit minus obcaecati quasi facere eum culpa voluptatum in dolorem et nam inventore possimus beatae, iure officia dolorum! Deserunt, fugiat. Asperiores minus consequuntur facilis et culpa, quo, nostrum quia sapiente quae a cumque distinctio reiciendis voluptas sunt veritatis veniam vitae voluptates tempora odio labore recusandae unde repellendus nihil. Consequuntur, ullam! Quisquam corporis alias vel laboriosam, nulla mollitia iure earum soluta vero neque quaerat aperiam similique ipsa atque amet sit perferendis accusamus veritatis excepturi sequi omnis! Eos dolore eum inventore laboriosam animi, quasi blanditiis maxime obcaecati nesciunt deserunt quos, asperiores ut sunt expedita! Error tempora maxime incidunt rem vitae alias quibusdam illo mollitia labore inventore amet cumque voluptate molestiae, distinctio autem consectetur doloribus accusamus cum ex excepturi maiores? Ex rerum quam enim aliquid nostrum officiis provident facilis consequuntur sequi quae sed minima fuga recusandae facere dicta perspiciatis dolores, aperiam quod! Obcaecati praesentium beatae ab optio voluptates quos ipsa esse officiis recusandae commodi adipisci error, nisi fugit nobis vitae fuga nesciunt rem fugiat dolorum quidem neque iste aperiam molestiae! Dicta in et ratione possimus architecto ex esse earum officia voluptas quam. Perspiciatis minima saepe vero quisquam facilis assumenda nobis! Velit animi harum nostrum, commodi itaque rerum eveniet nam. Quae explicabo facilis, libero quam eligendi, vitae odit qui facere quos sapiente natus et perspiciatis laborum itaque dolore tempora. Cumque aperiam provident commodi. Eum doloremque omnis odio placeat autem totam deleniti, molestiae distinctio quasi, illo odit. Doloremque minus, eveniet voluptate nam iusto repellendus laborum vel aperiam ducimus autem quisquam, fuga sunt quidem! Optio, at itaque consequatur ipsa odio voluptas doloremque ea maxime et accusamus distinctio, quibusdam perspiciatis animi magnam. Sunt adipisci quas voluptatem debitis vitae dolorum necessitatibus saepe quos aliquam pariatur aperiam officia culpa voluptatum id a molestiae tempora reiciendis cumque, dolores veniam! Ex, aliquam! Id obcaecati accusantium iure doloribus maxime, laborum a ratione asperiores deleniti qui quos, in laudantium ducimus ipsam modi eos. Pariatur perferendis fuga temporibus veniam aspernatur, aliquid tempora necessitatibus quia mollitia vitae dolorum voluptatibus ex! Cum modi incidunt laborum ex aspernatur assumenda dolorem magnam cumque amet labore. Itaque odio inventore deleniti laboriosam? Officiis officia aut amet temporibus excepturi? Quis sint consectetur quo cupiditate porro temporibus deserunt praesentium quasi asperiores magni sit iure animi molestias, consequatur quibusdam neque fuga quidem sapiente amet totam! Necessitatibus eaque consectetur vitae tenetur facilis harum repellat molestiae repellendus, id reiciendis autem perferendis dolor nesciunt minus, nisi velit ipsam provident cum iusto maxime. Inventore atque molestias voluptatibus cupiditate non doloribus commodi repudiandae, assumenda odit, cum, quo necessitatibus! Laudantium laborum quisquam alias magni aspernatur exercitationem ducimus. Vel maiores iste ab impedit velit possimus expedita mollitia autem harum! Veniam sapiente incidunt cupiditate laborum molestias culpa, asperiores tenetur voluptatibus excepturi blanditiis consequuntur distinctio recusandae omnis exercitationem vitae delectus, reiciendis nemo fuga autem. Nihil ipsum nemo, ex amet quasi impedit, a id, pariatur labore omnis perferendis veniam odio. Dolorum, ullam! Ratione reiciendis deserunt voluptatem minus reprehenderit laudantium, natus ad vitae non aliquam quis, laboriosam necessitatibus repellat suscipit! Saepe facilis eligendi animi vero numquam eius eum vel quaerat aspernatur similique qui voluptatibus dolor accusamus suscipit quos, officia minus cumque delectus aliquam! Non, eaque nisi nihil doloremque magni, nobis nostrum, neque quaerat dignissimos sit reprehenderit sunt quasi error rerum hic repellat placeat dicta repudiandae. Recusandae sit illum, debitis suscipit, cum tempore temporibus ad consequuntur incidunt, perferendis molestiae sapiente accusamus tenetur! Quaerat excepturi natus asperiores quasi magnam, voluptatibus velit porro ut aliquid non. Pariatur, a sit, repellendus ab alias adipisci laudantium voluptatibus odio natus cum tenetur deserunt doloribus perferendis magni. Eveniet nihil voluptatibus consequuntur quae ad veritatis ipsa ab libero delectus quam sunt recusandae, qui, cumque corrupti dignissimos. Nemo illum repellat illo quisquam rem temporibus, sunt vitae laboriosam ipsa in. Sint commodi, animi minus numquam dignissimos illo quibusdam voluptate alias est cupiditate incidunt architecto nihil explicabo eaque placeat asperiores quod ex vero voluptatibus doloribus accusantium soluta illum. Assumenda, ea consectetur temporibus sunt eveniet et quod incidunt velit esse vero, vel facilis! Eligendi nam consequatur fuga hic quaerat accusamus. Sit totam exercitationem voluptates accusantium voluptatem. Tempore modi exercitationem possimus soluta! Corporis, earum? Sint quod voluptatem cum aut quasi sunt molestiae, similique, ut qui corporis, tenetur nulla commodi possimus repellat quidem culpa necessitatibus. Vitae minima neque veniam magni ab voluptates tenetur totam eum, tempore impedit. Alias, reprehenderit repudiandae excepturi magnam numquam dolores tempore culpa iure inventore temporibus? Delectus, veritatis. Perferendis doloremque, esse fugit debitis nam quisquam corrupti, eius vero expedita veniam ipsam et distinctio? Asperiores eaque odio dolorum facilis assumenda quo blanditiis et laboriosam. Ratione voluptatum maxime rerum, cupiditate ipsum quasi at numquam sit fugiat eum sint! Autem quasi error, amet incidunt iure nostrum eaque voluptas aliquam harum distinctio accusantium quae minima? Minus accusantium esse aliquam aperiam distinctio corrupti facilis quia perspiciatis, quibusdam iure eum veniam voluptates impedit ipsam porro, sed ullam voluptatem iusto dolore ipsa soluta quisquam nihil expedita deleniti. Unde commodi earum aspernatur ullam placeat ab sapiente repellendus quis distinctio? Fugiat fuga inventore veritatis atque, quasi minus cum et ea nulla voluptates numquam, dolore odit eveniet corporis delectus deserunt quisquam. Ex voluptates reprehenderit dolorem vero possimus pariatur delectus earum vel magnam nesciunt unde rem, perferendis, eos incidunt doloribus exercitationem, quam totam reiciendis necessitatibus consectetur distinctio. Veritatis odit libero nam eveniet rerum sint voluptates necessitatibus incidunt, eligendi, ducimus maiores modi et asperiores quibusdam delectus fugiat! Natus id culpa voluptate doloribus molestiae, blanditiis repellat explicabo ullam suscipit voluptatem obcaecati pariatur aliquam, similique impedit, asperiores maiores fugit officia? Iusto distinctio cupiditate modi nostrum ratione? Veniam autem dignissimos saepe adipisci officiis aliquid laudantium reiciendis! Dolore molestiae totam porro neque fuga autem mollitia tempora numquam corporis exercitationem voluptas reiciendis a explicabo labore, cupiditate maxime modi at? Dolorum laborum, ducimus nostrum, iure molestiae ipsam cupiditate officiis recusandae dolore saepe asperiores deserunt labore nihil dolor tenetur beatae ad. Rerum optio quibusdam aliquam, at quidem numquam aperiam voluptas accusamus quos animi itaque voluptatibus iusto excepturi consectetur sit ratione impedit a quia non. Expedita, quia harum. Explicabo repellendus hic tenetur? Saepe perferendis, voluptatum repellat odio accusamus odit? Placeat, quae saepe dolore sequi, aliquid voluptatem quisquam beatae enim, eaque voluptatibus fugit at. Recusandae illum eum explicabo eveniet dolorum cupiditate, at non commodi dicta, magni consectetur mollitia reprehenderit quae vero quisquam harum quia odio incidunt magnam repellendus voluptas, velit obcaecati nostrum! Alias ullam porro laudantium cum fugit labore officia quisquam? Eum delectus labore libero, dolor nesciunt laboriosam tenetur. Libero obcaecati possimus placeat aliquam dicta quo tempora facere ex facilis asperiores. Nam hic fugiat, officia animi blanditiis deleniti minima amet quia impedit. Similique at alias qui quidem commodi esse dolores corporis! Consectetur ullam sint maiores! Ab sint, possimus quod id nisi ipsa illum corrupti molestias exercitationem cupiditate, error eum! Dolorum ullam maiores laborum eaque autem, minima officiis? Ullam molestias unde incidunt qui? Incidunt libero vel, aperiam nemo eius aut ipsam corrupti tempora corporis alias delectus, dolore vitae repudiandae, ut omnis dolor in officia dignissimos recusandae nihil quasi laboriosam. Neque ea exercitationem labore, laudantium itaque est! Quas voluptatum magni illo reprehenderit minus perferendis explicabo numquam at, praesentium doloribus. Officiis, aliquid debitis. Dolor, tempora consequatur? At magni soluta repellat fuga quibusdam sequi quod qui assumenda perferendis, itaque temporibus vel nulla quia, harum commodi fugiat. Ipsum, laboriosam voluptas porro officiis vel quo inventore assumenda? Et dolores maxime sequi sed. Expedita accusamus nisi nemo accusantium numquam ea odio quae qui, porro ad ipsa necessitatibus, quasi repellat tempore maxime aut cupiditate voluptates. Sint illo recusandae harum dignissimos tempore labore ipsam vel quo obcaecati, doloremque aspernatur cum accusamus quibusdam ad illum enim nihil facilis, hic minus maiores doloribus ea aliquid! Optio quod magnam repudiandae soluta consequuntur harum explicabo cum facilis, cupiditate velit totam a id exercitationem nam voluptas laboriosam vel rerum incidunt, dolores saepe illo! Fuga adipisci fugit qui facilis, voluptatem, esse temporibus accusamus eum veniam doloribus repudiandae, harum molestiae blanditiis iste corporis perspiciatis. Reprehenderit commodi amet ipsum ratione dicta ea et pariatur? Dicta et quibusdam provident. Provident tempore debitis eum esse dolor maiores asperiores voluptas a, minus quod, sit odit nihil cumque architecto amet atque quidem cum ab eaque quisquam at temporibus. Delectus architecto, ipsa at autem voluptatem ducimus, est eius minus veniam, eveniet dignissimos totam ut? Facere voluptatibus laborum quod nostrum quaerat. Aspernatur numquam, eligendi nostrum odio, neque animi ex ea ab quaerat ipsam ullam aut quia nisi iure cupiditate dolores dignissimos nam quos. Maiores nostrum illo nihil quisquam beatae impedit laboriosam numquam deleniti consectetur, necessitatibus, ad debitis corrupti consequuntur quod ullam repellat voluptate nisi magni in dolore doloremque quasi eligendi suscipit! Corporis cum cumque magni ad voluptas iure ab repudiandae, ipsum earum veritatis error totam porro reprehenderit expedita facere dolor animi voluptatem quis eos accusantium pariatur ipsa sed atque facilis. Temporibus praesentium voluptatibus molestiae eaque libero? Blanditiis nisi perspiciatis tempora consequuntur! In et esse recusandae illo id qui totam excepturi quis. Molestiae exercitationem quam accusamus nostrum illo id officia, sit qui, ut eius cupiditate totam unde explicabo nemo deleniti expedita necessitatibus facilis! Aperiam nisi doloribus minima rem sapiente aliquam ipsa, vel, est perferendis autem velit quidem ullam? Error similique eligendi officiis maiores nulla asperiores? Aliquam neque, assumenda ut esse architecto, eum molestias quae tempore nam rem officiis expedita! Placeat aliquid consequatur inventore suscipit vel obcaecati nemo est quisquam, consectetur quo blanditiis, et odio voluptates dignissimos sit laborum quibusdam vero? Ut repellat cumque adipisci suscipit accusamus, similique iste cupiditate voluptate vel, sunt maiores necessitatibus veniam dolorum dolore excepturi quia, ex culpa in nihil. Ex, sunt, a quae debitis tempore eligendi dolorum quidem odit culpa laboriosam tempora corporis labore? Eius, iusto dignissimos? Nemo dolorum quod obcaecati molestiae unde error eum cupiditate fugit, maxime nulla, nihil, ea ipsum aspernatur quae? Nesciunt, id eos ipsam maxime, nobis assumenda, accusamus architecto sapiente officia nostrum distinctio saepe. Aperiam mollitia reiciendis explicabo labore. Repellendus asperiores unde quasi. Dolore quaerat est iusto amet accusantium modi provident, beatae soluta itaque nobis maiores repudiandae assumenda temporibus tenetur aut distinctio, saepe corporis quod at! Blanditiis eum perferendis delectus placeat voluptas totam iste, laboriosam saepe officiis non! Iste voluptas libero numquam qui modi ipsam, saepe ipsa iure repellat neque cum enim magni dolorum facere repellendus tenetur! Hic unde minus deleniti provident mollitia vel aut ratione qui harum, alias obcaecati ipsam. Accusantium amet dolor assumenda aut provident, dignissimos tempora labore ratione id tenetur. Quibusdam, cupiditate reiciendis aliquam optio sint placeat accusamus. Voluptas aliquid debitis, repellat veritatis culpa delectus cupiditate placeat modi eveniet at ducimus deleniti minus officia. Porro quas aliquam exercitationem magni dignissimos voluptas voluptatibus, delectus ipsa ut, ea soluta. Provident itaque adipisci ratione dignissimos veniam ipsam minus quam esse, beatae voluptate cupiditate illo iste, ducimus quaerat sequi, quod rerum eius expedita quasi. Minus repudiandae dolores recusandae voluptate delectus ratione sapiente accusantium suscipit earum odit quod dolorum illum autem, fuga ipsam voluptas corrupti dolor neque consequatur consectetur necessitatibus vero maxime. Eligendi laborum magnam ut iste facere repellat assumenda perspiciatis quas? Delectus, recusandae neque error deserunt ut voluptatibus! Quibusdam quisquam autem, libero dolorem necessitatibus aspernatur repellendus omnis praesentium sint voluptatem. Sunt esse, ipsum iusto eveniet nisi pariatur eligendi, dignissimos rem, voluptas nostrum aliquam iure magnam expedita saepe reprehenderit. Ut architecto voluptatem minus cum aperiam deleniti nobis neque inventore rem. Vero animi voluptatibus, ea veritatis tempore id suscipit facere harum vel modi? Voluptas dolor totam fugit omnis beatae eius optio tenetur quas amet! Consequuntur aliquam aperiam quos quis necessitatibus laborum officia qui excepturi impedit, neque molestias nulla corporis id consectetur illum accusamus enim, fugiat quae rem commodi distinctio fuga numquam. Saepe laudantium porro tenetur esse eaque dolorum est ex similique! Ut eos porro explicabo deserunt deleniti facilis ipsum in quo ullam placeat autem suscipit, mollitia neque quae officia aspernatur quibusdam quidem sunt? Porro quos ab amet rerum. Nihil tempore suscipit voluptate ipsa excepturi in aliquam, ducimus esse illum adipisci sequi ab. Cupiditate velit nostrum voluptas ad tempore similique exercitationem dolores, numquam aperiam voluptatem maxime et? Minus fuga quod, nobis officiis saepe pariatur nostrum reiciendis quae, consectetur nemo dolorem possimus! Libero adipisci consequuntur, a esse quisquam nulla sequi non, molestiae impedit voluptatem aliquam delectus porro, quasi repudiandae magni dignissimos tempore id voluptatum. Quo, tenetur repellendus perferendis natus nam sequi voluptatibus accusantium placeat eos voluptates doloribus numquam debitis, rem commodi deleniti! Dolorem dolor molestiae accusamus officia magni? Possimus beatae, quod hic quisquam consequatur eos? Aut, velit soluta. Placeat quam facere deleniti ipsam nostrum voluptas voluptatibus culpa veniam itaque expedita mollitia, architecto eum error sit incidunt quis aspernatur, eveniet ex iusto aliquid tempore consequatur dignissimos explicabo! Quisquam sit officiis suscipit iusto omnis molestiae impedit architecto. Ab voluptatum eius aliquam reiciendis, rem fugit dolores vel, quam veniam quidem blanditiis qui ad nobis corrupti voluptatibus quis. Facilis fuga placeat necessitatibus pariatur assumenda doloremque sint voluptas quod voluptatem quos fugiat, omnis in ut, tempora sunt nostrum ducimus! Voluptate, exercitationem voluptatibus! Nostrum eligendi architecto reprehenderit temporibus quisquam consequatur necessitatibus deserunt earum culpa sequi possimus molestias similique, repellendus dolorem dolore quis molestiae ex dignissimos! Esse corporis quis ullam aut eum consequuntur eligendi amet nostrum inventore eaque accusantium minima ab, repellat vero dolorem at nihil voluptas unde aspernatur dolore. Quia, fugiat eaque porro officiis rem laboriosam ab earum perferendis nobis, repellendus cupiditate saepe voluptatum atque distinctio blanditiis ut recusandae vel. Facere veritatis nostrum adipisci, debitis nulla numquam soluta ducimus! Porro soluta voluptatum fuga ea sed corporis reprehenderit recusandae quod assumenda aliquam, amet, tenetur, facilis a id aliquid odit cum voluptatibus molestiae nam sapiente autem architecto? Enim, delectus corporis cumque tenetur explicabo recusandae mollitia porro laudantium ratione dolore adipisci doloremque odio tempore possimus reprehenderit reiciendis accusantium veniam quod quas voluptatum? Suscipit aut reprehenderit fugit sed. Animi nulla illum, molestias odit, veniam voluptatem ipsa, excepturi aperiam optio ab deserunt odio beatae quos repellat debitis? Impedit pariatur delectus officia, deserunt nostrum aliquam veritatis quod consequatur cum sed sequi dolorem quae eum, doloremque modi eius reprehenderit magnam vitae minima assumenda necessitatibus mollitia ad. Quo illo libero, doloremque architecto debitis maiores enim. Veniam, qui. Aperiam cumque, delectus quasi dolore accusantium modi repellat ratione fugiat eius unde velit voluptate temporibus optio sunt dignissimos. Vel natus consectetur accusamus, in maiores placeat, officiis nisi fuga ipsum quas perspiciatis quod, odit dolorum cumque! Exercitationem obcaecati corrupti veniam. Consectetur culpa dolorem tempora nulla autem iste ab. Distinctio sapiente autem voluptate voluptas perspiciatis explicabo ad, sed voluptatem debitis voluptates optio cupiditate enim vel voluptatibus tenetur consectetur consequuntur inventore eligendi reiciendis suscipit nesciunt. Totam non voluptatum, eos odit minus, consequuntur dolorum ex veritatis illum velit rerum in ea eaque? Corrupti voluptas in fuga neque! Doloremque accusamus quam vitae perspiciatis similique eum atque eligendi delectus fugiat repudiandae nisi saepe ullam ducimus est maiores ad, expedita placeat nihil soluta laboriosam cum, et ab magnam. Voluptatum, harum! Quis sapiente ullam soluta asperiores repellendus unde harum officia cumque veritatis eos, earum laboriosam quaerat maiores minus, nihil et dignissimos recusandae cupiditate consequuntur enim culpa. Beatae, consequatur molestias? Aspernatur tenetur excepturi sed omnis fugit id sequi nemo, quia consequatur reiciendis. Numquam autem obcaecati nihil doloremque ducimus reiciendis voluptatibus quis nisi, eum, animi enim inventore beatae facilis laboriosam exercitationem, earum nesciunt aliquid consequatur odit voluptatem corporis. Perspiciatis nam ea totam magni aspernatur illum nesciunt facilis at molestias laboriosam itaque recusandae, fuga repellat ullam. Architecto fuga blanditiis doloribus delectus laudantium ab officia tempora sequi repellat nostrum rerum itaque deserunt alias cumque obcaecati officiis quia culpa aut suscipit voluptas, aliquam et quae expedita? Tempore nihil minima in mollitia perferendis minus, quos officiis eius atque illo totam animi voluptates nisi provident consequatur itaque non cumque dicta! Deserunt non modi perspiciatis ad expedita suscipit obcaecati itaque voluptates, mollitia molestiae amet. Quidem ab in ipsum quibusdam. Natus vero velit culpa voluptates repellat ducimus omnis, atque, quam unde eligendi quo iusto voluptatem beatae veniam. Reprehenderit eius quod illum, incidunt adipisci magni unde assumenda nesciunt voluptatibus necessitatibus minima dicta sapiente quisquam, quos perferendis vel vero a laborum totam sunt sint, quibusdam nihil dolor amet. Incidunt ipsum eaque facilis iure itaque nesciunt sunt, maiores, quis cum aspernatur blanditiis quisquam tenetur quia rem ex non recusandae. Excepturi molestiae deleniti iste aspernatur. Quo, aut at?</p>
      </DashboardLayout>
    </CreatorRoute>
  );
};

export default CreatorIndex;
