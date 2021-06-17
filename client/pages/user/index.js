import { useEffect, useContext } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/userRoute';


const UserIndex = () => {
  const { state: user } = useContext(Context);

  return (
      <UserRoute>
        <h1 className="jumboTron">
          <pre>{JSON.stringify(user, null, 4)}</pre>{' '}
        </h1>
        <div className='content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex eos accusantium nemo, fuga natus aut reprehenderit consequuntur blanditiis deleniti repellat sunt nihil quaerat aliquid et molestiae nulla in dolorum dolore id. Odit fugiat pariatur atque, expedita nemo accusantium sequi unde natus itaque minima voluptate debitis aperiam delectus veniam eligendi doloremque repudiandae dolorem reiciendis dolore illo deserunt quo mollitia. Nam odit corporis, aliquid id ullam nulla repudiandae, unde hic voluptatum obcaecati officiis laudantium velit dignissimos itaque molestiae eos? Nesciunt quia accusantium quas earum reiciendis fuga, dignissimos distinctio corporis sapiente impedit sunt ratione deserunt dolor ducimus esse non, excepturi magnam quam! Et ullam alias sunt doloremque perferendis quo facilis, dignissimos ea. Tempora accusamus labore cum libero blanditiis, placeat id, porro quo veritatis quis nihil eaque dolorem assumenda exercitationem dolore natus ipsa nostrum ullam omnis consectetur? Debitis nesciunt doloremque molestiae harum libero ab officiis praesentium, soluta quaerat! Officiis illo facilis fugiat corrupti ipsam temporibus doloribus vero consequuntur delectus sed? Molestiae vel sequi vitae officiis totam, blanditiis sit, eligendi debitis minus enim adipisci facilis aut ipsum ipsam libero consequuntur non amet dolorem omnis. Omnis quo incidunt ullam porro, iure blanditiis officia, corporis eos doloremque totam ad minima placeat eligendi. Nemo dicta laborum officiis fugiat expedita? Aperiam explicabo sequi aliquid quaerat tenetur ipsa ut tempore dolorum quisquam asperiores suscipit vero, adipisci harum aspernatur ratione nam voluptas sunt sint? Error voluptatibus ab illum eum praesentium. Animi numquam amet corrupti saepe ab, vel natus voluptates laudantium officiis veritatis explicabo quam vero odit quibusdam velit, asperiores temporibus! Blanditiis ipsa earum deleniti laborum hic nobis quaerat ullam. Perspiciatis rem deleniti quae accusamus consequatur, atque minima, illo molestiae quidem harum ut assumenda neque, animi quisquam odio non reiciendis odit modi culpa. Quo iusto voluptate fuga saepe quis possimus aperiam porro ea mollitia dolore, reiciendis optio ullam laborum exercitationem sequi.
        </div>
        <div className='content'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nobis reiciendis, consequuntur molestias voluptatibus sapiente ea totam adipisci hic odit molestiae iusto modi perspiciatis dolor! Illum ex delectus fuga veritatis excepturi pariatur reprehenderit corrupti repellat culpa, eligendi aspernatur ullam nam temporibus. Obcaecati similique fuga id. Quisquam totam eum labore magnam enim earum aut veniam ipsa a id. Dolor mollitia ab qui fugit nihil velit explicabo dolorem dolores cupiditate corrupti esse incidunt voluptas, similique et ducimus nostrum id expedita culpa suscipit reprehenderit facere. Enim recusandae esse doloremque sint error temporibus, veritatis nobis quis asperiores voluptatem amet eveniet labore aliquam eum magnam quae modi explicabo eaque fuga possimus inventore suscipit culpa iure ut. Minus officia odit porro tempore inventore quisquam similique, neque beatae aut fuga provident magnam illum ducimus reiciendis sunt doloremque natus est alias vel. Laboriosam ea ab nesciunt rerum deleniti possimus sequi sint harum minima labore ducimus sit, tenetur doloribus omnis necessitatibus temporibus dicta neque sapiente eveniet vero. Possimus tempore exercitationem cum ea dolores. Officia consequatur rem neque optio molestias, quibusdam ea eos dolorum modi voluptate ipsam illo qui alias laborum. Quis ipsum fugiat sunt inventore explicabo, est, sapiente molestias repudiandae aliquid ipsa ut! Commodi optio, perferendis nam maiores tempore ea incidunt quia voluptates dolores natus et aperiam quis explicabo ipsa nemo adipisci repudiandae, distinctio voluptas, eius molestiae fugiat laborum enim dolor facere. Aperiam cumque officiis quam unde. Minus perferendis eaque magnam asperiores itaque aperiam, id libero quia esse qui, ut sit aliquam, totam maiores hic iusto. Accusantium ut itaque veniam provident facere repudiandae facilis accusamus ad, soluta eum ullam similique totam labore laudantium, nobis placeat unde doloremque error nesciunt perspiciatis. Ipsam laudantium minus sequi quasi doloremque nostrum eum, quas impedit dolorem harum error quam explicabo ratione distinctio vel. Quae ea deserunt veritatis, animi saepe dolorem quas eveniet asperiores voluptates.
        </div>
        <style jsx>{`
            .content {
              width: 300px;
            }
          `}</style>
      </UserRoute>
  );
};

export default UserIndex;
