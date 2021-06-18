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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur explicabo saepe similique optio amet tempore eveniet, reprehenderit nobis magni corporis ea vel cupiditate adipisci quis accusantium odit tempora nostrum. Atque omnis obcaecati autem, quidem commodi ut esse magnam, quae, voluptatibus quam debitis. Laboriosam eveniet ex, tempore iure aut maiores voluptates accusantium cupiditate fugiat consequuntur corporis fuga quas. Ratione cupiditate iusto reiciendis quo aperiam alias et id. Saepe in nam praesentium aperiam id quisquam tenetur asperiores voluptatum quibusdam exercitationem, doloremque laboriosam deserunt? Facilis nobis ducimus porro ipsa, animi placeat dolorum sit ullam ea maiores praesentium nihil ipsum commodi voluptatibus optio iusto tempora eligendi itaque tenetur quae accusamus. Ducimus, quibusdam, repellat porro sequi id ea consectetur nihil nisi commodi sint deleniti, odio esse natus eos voluptates? Quae eos fugit blanditiis laborum officiis provident optio. Soluta perferendis nesciunt dolore accusantium facilis dolorum laudantium eius voluptate commodi, earum voluptatibus praesentium corrupti delectus dicta ullam consequatur atque? Vitae est obcaecati optio expedita nihil cupiditate dignissimos quaerat iste aliquid. Voluptates itaque blanditiis nemo quod ea? Necessitatibus animi neque, explicabo enim suscipit quidem itaque omnis sint velit? Tempore inventore eius aut dolorem sequi magnam, numquam assumenda asperiores natus quia temporibus rerum perferendis! Expedita, adipisci? Rem, aperiam optio fugiat quidem vitae facilis odio tempora eum aliquid animi similique totam magnam itaque nisi earum ipsum, doloribus dolorem debitis dignissimos cupiditate? Sequi, qui, libero hic, saepe consequuntur pariatur porro corporis praesentium maiores id at laudantium! Eligendi qui minima, fugit beatae, deserunt temporibus laudantium officia architecto magnam consequuntur labore. Vitae iste harum quas necessitatibus eligendi atque accusantium dolor explicabo nulla porro ut animi commodi aspernatur, perferendis, earum, obcaecati non! Quia quo, sit nobis fugiat consectetur quaerat enim saepe odio nostrum iusto provident perspiciatis, repellendus corrupti ut libero atque, nulla velit reiciendis expedita! Aliquam dolores quos magni tempora, eius ab quam ipsam error molestias labore, soluta eos dolor maiores minima sint natus atque consequatur accusamus sit deleniti ex itaque obcaecati aliquid harum? Sint dolorum exercitationem a error et? Reprehenderit distinctio ducimus unde natus laudantium obcaecati velit quaerat suscipit optio eveniet illum commodi dicta rerum vero quisquam, debitis id dolores ipsam aut? Quaerat laudantium sequi ex. Soluta assumenda cum ipsam aliquid quos officiis dicta numquam nemo. Sapiente cupiditate labore quos corporis dolore. Alias, molestiae repellendus nobis ea corporis culpa. Inventore porro provident amet quam. Temporibus neque facere, hic pariatur quidem velit quam cumque facilis, esse accusantium dicta maxime laborum officiis modi dolores? Corporis tempora fuga libero eaque neque, ex ea fugiat voluptatibus atque tempore. Repellendus, ea illo? Sit, dignissimos obcaecati consequuntur, accusamus atque numquam ullam praesentium, quam reprehenderit consequatur sunt quidem odit in eum laborum iure vitae voluptatibus. Architecto doloribus accusamus iste, hic neque ut facilis perferendis doloremque est ab fuga adipisci illo et porro eum vero sit quasi reprehenderit sequi ullam qui aliquam atque? Vel repellendus ullam esse nulla amet, blanditiis ratione culpa reiciendis saepe tempora fugiat iure suscipit ipsa est ipsum sequi, cum laborum. Esse, similique. Architecto excepturi doloribus officia cupiditate sapiente animi quae atque distinctio, ut tempora ad placeat voluptate, fugiat eos aut iusto minus. Exercitationem distinctio quas quasi aliquam, delectus quibusdam laudantium, quam voluptatem ipsa quos eum fugit ex! Voluptate corrupti dicta alias, quidem libero sunt voluptatum est, dolorum consequatur facilis quisquam repudiandae, ex in recusandae illum veniam molestias cupiditate asperiores! Voluptatum magnam inventore accusamus aliquam commodi minima incidunt odio eos, alias quae aut eum? Aspernatur culpa molestias eius praesentium assumenda ullam voluptatum nostrum doloribus tenetur, recusandae quae at commodi itaque ipsum consequatur, libero sunt ad tempore natus officia! Sit numquam possimus soluta, quis porro quasi ut itaque ea officia. Suscipit commodi error reiciendis fuga rem expedita, quod ea laudantium reprehenderit delectus cupiditate, culpa minima explicabo tenetur nulla placeat veritatis, similique aliquam modi libero minus? Distinctio, recusandae fugiat. Voluptas consectetur commodi illo aut, deleniti at ipsum minima magnam modi porro rerum quae ullam molestias dolore qui? Rerum animi quidem mollitia a perferendis ipsa totam in reprehenderit non repudiandae architecto rem, nam facere odit. Est fugit ab fuga dolore odio eos sint. Ipsam sit repellendus labore doloremque perspiciatis fugiat sed quisquam voluptatibus ea alias magni error atque id, molestiae reprehenderit eveniet temporibus! Recusandae exercitationem consequuntur, minima possimus odit sapiente, eligendi excepturi dolorem quaerat voluptate magni provident amet totam perferendis a, laudantium cupiditate eos. Vel beatae error dicta repellendus reiciendis consectetur placeat numquam, cupiditate, molestias ullam, vero ab id praesentium laborum? Officiis inventore animi adipisci, fugit incidunt sit quam, dolor quidem nesciunt vero rem consequuntur temporibus possimus ipsum, magni obcaecati quia vitae modi minus velit. Quidem iste vel quos obcaecati ipsam ab harum sapiente nobis in error sunt libero maxime fugit ut, labore laudantium officiis itaque rem numquam deserunt iusto et! Dignissimos, officiis. Blanditiis a quae tempore! Iusto quo molestiae deleniti necessitatibus quidem odio repudiandae aliquid quaerat fugiat molestias ipsa accusamus quisquam nam, eveniet atque nihil eum odit neque autem consectetur, voluptatibus perferendis est blanditiis. Corrupti inventore praesentium animi facilis reiciendis quasi necessitatibus aliquid non, quas dolor asperiores nesciunt odio quaerat consequuntur, illum rerum exercitationem, porro nostrum nihil doloremque? Libero sint delectus recusandae magni distinctio quibusdam tempore culpa debitis asperiores cumque natus, quis earum tenetur incidunt laboriosam labore reprehenderit voluptatibus quo id voluptas sunt! Incidunt, enim alias molestias dolores provident aliquam soluta corrupti deserunt architecto, accusamus illo laborum, libero rem labore earum adipisci ipsum. Mollitia a nobis natus, quam magnam pariatur perspiciatis aspernatur iusto sit quisquam sed cupiditate cum aut molestias nulla, quos eligendi optio culpa ipsum! Necessitatibus temporibus dolore fugiat, excepturi culpa cumque saepe quia totam quis! Delectus aut, deserunt reprehenderit modi placeat voluptate vero. Officia a eaque, dignissimos accusamus explicabo vero dolorum alias suscipit commodi earum laborum obcaecati debitis illum accusantium illo atque quaerat temporibus! Inventore, nobis tempora? Repellat, quo. Vel praesentium quibusdam quae numquam, eaque doloribus blanditiis minima molestias, dolores totam magni voluptatibus nulla sint! Nisi ipsam facilis, illo et vero dolore labore repudiandae facere adipisci quis ex, maxime eligendi dignissimos enim culpa fugit laboriosam minus eos voluptas veniam aperiam! Alias cumque magni tempora assumenda officia sunt inventore praesentium accusamus consequatur nisi earum ad molestias cum esse obcaecati neque architecto, dolorem voluptatum? Numquam soluta culpa minus animi sit vel a accusantium, unde deserunt? Ipsum, eum nesciunt sed, voluptatem architecto sunt perspiciatis, officiis at officia voluptas vel? Praesentium laboriosam ea, hic optio itaque libero iusto, maxime mollitia illo omnis nihil. Beatae accusamus ipsum error non, suscipit explicabo rerum quidem, officia facilis veritatis sequi quam repellat repudiandae iste deleniti id eum sit aliquam ipsa odio sed aperiam libero, excepturi porro! Eligendi maxime quas veniam asperiores enim iste sed voluptatum exercitationem maiores magnam, eius corrupti? Ratione eveniet et tempora possimus fuga quia doloribus. Enim sed, ex adipisci ad fugiat facilis sunt distinctio facere rerum pariatur eius sit quas veritatis laborum eos aliquam, numquam quia earum maxime praesentium! Esse maiores sed voluptas, tempore excepturi eaque? Rem, odio! Consequuntur cumque, harum tenetur iure aspernatur sapiente, cum suscipit excepturi distinctio, expedita exercitationem quaerat eum! Rem perspiciatis fugiat animi repellat veritatis blanditiis alias, quae doloremque placeat porro, explicabo enim. Adipisci cum corrupti, consequuntur debitis porro voluptas quidem natus, libero temporibus, sit quos aspernatur nisi? Non, fugit illo placeat error est quaerat voluptatum soluta voluptate officiis? Quo nam dolorem, aspernatur nostrum molestiae nisi alias similique quasi! Et similique nobis maiores incidunt eum debitis temporibus repudiandae dolores tenetur beatae, ad placeat laboriosam dolorum quis vitae qui? Aliquid ut exercitationem quasi. Fugit laboriosam, sint a modi architecto iste sit saepe minus tempore! Laborum accusamus qui dolorum nemo maiores itaque libero at expedita adipisci vero, ex dolor, perspiciatis voluptas odio rerum! Numquam quidem cumque sed eos, laudantium modi amet eaque voluptatem commodi sint fugit, iusto tempore veritatis labore nostrum. Nihil, voluptas dignissimos? Inventore aut error ad rem. Provident, perspiciatis. Numquam aperiam nobis voluptate libero nemo culpa consequatur ea ut. Architecto saepe, fugiat adipisci voluptatibus officiis pariatur quo odio! Esse ad eos fugiat! Temporibus consequuntur voluptatibus recusandae eos mollitia. Expedita officiis ipsam ex laboriosam praesentium aut sunt provident at temporibus nesciunt a cumque qui, quae sequi quam rerum. Dolorum earum, rerum voluptatibus unde adipisci magni quos excepturi quasi tenetur libero assumenda rem similique, consequatur, blanditiis veniam dolores accusantium reiciendis error. Architecto beatae magni temporibus laborum sed sunt voluptate neque provident, debitis quis officiis? Recusandae cupiditate, quos asperiores nostrum delectus laboriosam quisquam fugit, expedita quidem, a sed obcaecati voluptatibus. Cupiditate quaerat laudantium non architecto reiciendis in mollitia dolor at dolore, magnam vel. Dolorem incidunt maxime saepe qui vitae deserunt magni corporis vel sed aperiam eius magnam provident neque tempore laboriosam, ducimus atque amet voluptas, laborum placeat itaque in beatae ab rerum. Quidem neque a totam culpa, eos iure ipsa fugit impedit maxime fuga molestiae tempora voluptatem esse commodi cum temporibus! Rerum assumenda blanditiis, consequuntur itaque dolores impedit tenetur error minus ut architecto! Doloremque adipisci beatae officiis, dicta accusantium illum fugit voluptatibus quidem ratione quibusdam rerum. Unde, ducimus. Delectus perspiciatis eligendi fugiat accusantium dignissimos praesentium voluptatum tempora eveniet officia facere quibusdam, voluptas nesciunt possimus illum doloribus, culpa omnis libero ad odio unde magnam neque expedita obcaecati! Tenetur ad iure dolor accusamus atque est nostrum harum optio fugit perspiciatis fugiat iusto, minus, sequi eius. Fuga omnis ipsam, a non ullam pariatur dolorum sint voluptatum deleniti! Vero dolor odit voluptate minima tempora? Neque fugiat quos placeat quis doloribus iusto delectus distinctio similique nihil magnam velit rerum amet quas blanditiis facilis inventore dolore molestias veniam ipsum pariatur enim, eius vero! Earum, repellat. Nihil, blanditiis! Aliquid, a asperiores, maiores nisi illo totam, voluptates maxime nemo quasi facilis quos? Voluptate ab ipsum natus magnam, corrupti eligendi facere, enim sit harum fuga sequi itaque. Exercitationem illum debitis quos ipsum dolorum quidem praesentium corrupti placeat iure molestiae odit unde vel labore corporis cumque magni consequuntur molestias omnis minus, veritatis maiores similique nobis. Dolore itaque officiis voluptatibus ex ab debitis tempore nemo rem molestiae, pariatur assumenda qui exercitationem labore minus, corporis ducimus quia sed, facere beatae quos sunt commodi aperiam. Deserunt obcaecati unde fuga, vitae soluta minus non ipsa quas corporis a quaerat! Quia adipisci ex optio cupiditate quisquam fuga, consequatur aut iusto ad nulla. Inventore culpa consectetur, assumenda aperiam tenetur architecto beatae corrupti doloribus consequuntur nam enim at fuga iure! Quae ea eius corporis suscipit! Sint cumque ut voluptatum nisi porro culpa, harum quod animi suscipit possimus amet labore magnam eos nostrum ducimus eum? Placeat labore dolorum libero ducimus voluptas, id odit hic eum vero maxime ipsa, delectus exercitationem eveniet! Quas ratione delectus eos ea unde consequuntur fuga nobis ad molestias quis eligendi, tenetur id temporibus est. Nisi iste incidunt adipisci veritatis eos nihil id, at tenetur minima! Maxime itaque commodi numquam nihil nam unde delectus tenetur adipisci dolorum eos, cumque sed quo reiciendis ullam in? Sequi ad ipsa provident rerum illum dolores reprehenderit excepturi quidem tenetur! Odio officiis minus, aut asperiores in saepe ut nihil aspernatur, ullam debitis nostrum quasi sit corrupti quos vero repudiandae, obcaecati vitae fugiat dolorum exercitationem dolor officia iste velit. Sint voluptatibus cumque ad iste earum sequi distinctio necessitatibus alias? Voluptatem fugit, distinctio, ipsam iusto ipsa magnam dolorum eos fugiat maiores, molestiae dolores est dolore! Blanditiis corporis quae ab veritatis quos, quas, soluta at culpa nemo sapiente aperiam adipisci! Libero, facere nesciunt cum nobis omnis, at fuga quibusdam aliquam, et enim odio consectetur exercitationem sequi praesentium quia mollitia ullam officiis eos laudantium! Dolores quo placeat minima corrupti adipisci facilis, iusto at in accusamus fugit vel laudantium molestias perferendis doloremque magnam iste provident maiores rem. Aliquam esse sunt odio, fugiat vitae quo similique perferendis sed. Voluptatem inventore, saepe in facere necessitatibus fuga aperiam. Perferendis, veniam obcaecati laboriosam ea porro autem ullam dolore saepe fugiat maiores vel nesciunt est! Saepe rerum neque fugiat doloremque magnam odit doloribus quo laboriosam est deleniti tempora, quia sapiente esse, nobis, veritatis natus soluta perspiciatis. Impedit pariatur facilis voluptatem autem necessitatibus expedita deserunt, laboriosam aspernatur aliquid delectus tempora veritatis hic recusandae dolorum velit officia voluptates. Sed ut nobis corrupti inventore, fuga dolor. Vel ut modi alias quos velit explicabo maxime corrupti repellendus porro, aliquid exercitationem quasi veniam! Distinctio earum pariatur repellendus, error ea vel perspiciatis incidunt quo reprehenderit totam quisquam voluptates et, fugit exercitationem qui quas ullam debitis! Sunt, cumque?</p>
      </DashboardLayout>
    </CreatorRoute>
  );
};

export default CreatorIndex;
