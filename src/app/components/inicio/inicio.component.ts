import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit, OnInit {

  // todo -------------------------------------------------- TODOS -------------------------------------------------- todo //
  public todos = [
    {
      nombre: "Reptacillo",
      src: "../assets/media/personajes/reptacillo.webp",
      width: 100,
      vida: [8],
      recompensa: [2],
      ubicacion: ['Paso del Rey', 'Cruces Olvidados', 'Sendero Verde', 'Acantilados Aulladores', 'Tierras de Reposo'],
      descripcion: ['Tímido carroñero que se arrastra por las cavernas buscando comida.', 'Aburrido y patético. Casi no merece la pena matarlo.']
    },
    {
      nombre: "Vengamosca",
      src: "../assets/media/personajes/vengamosca.webp",
      width: 140,
      vida: [8],
      recompensa: [3],
      ubicacion: ['Paso del Rey', 'Cruces Olvidados', 'Sendero Verde', 'Acantilados Aulladores', 'Tierras de Reposo'],
      descripcion: ['Depredador volador que persigue a su presa incansablemente.', 'Este pequeño cazador feroz perseguirá con valentía a criaturas mucho más grandes que él. ¡Admirable! Aunque es débil y he devorado a cientos de ellos con poco esfuerzo o preocupación.']
    },
    {
      nombre: "Rey Vengamosca",
      src: "../assets/media/personajes/rey-vengamosca.webp",
      width: 200,
      vida: [90],
      recompensa: [65],
      ubicacion: ['Sendero Verde', 'Coliseo de los Insensatos'],
      descripcion: ['El patriarca de la colonia de las vengamoscas. Se abalanza en picado sobre los intrusos y llama refuerzos si se ve amenazado.', 'Una asquerosa criatura a la que le gusta masticar cualquier porquería que encuentre tirada en el suelo de la caverna. Cuando se percata de una amenaza, emitirá molestos gritos y chillidos, así que mátalo rápido.']
    },
    {
      nombre: "Gruzzer",
      src: "../assets/media/personajes/gruzzer.webp",
      width: 80,
      vida: [8],
      recompensa: [2],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Criatura simplona que se mueve de un lado a otro anárquicamente, zumbando y golpeándose con cosas.', 'Solo parecen ser ligeramente conscientes de lo que les rodea, por lo que son presa fácil para poner a prueba tu aguijón. ¿Qué será lo que guía su camino? Parece como si buscaran formas de morir.']
    },
    {
      nombre: "Madre Gruz",
      src: "../assets/media/personajes/madre-gruz.webp",
      width: 200,
      vida: [90],
      recompensa: [50],
      ubicacion: ['Cruces Olvidados', 'Coliseo de los Insensatos'],
      descripcion: ['Gruzzer maduro que lleva a sus crías en la barriga. Ataca lanzándose con su enorme cuerpo.', 'Sorprendentemente, este monstruo no pone huevos, sino que lleva a sus crías dentro de su gordo estómago. Esta extraña práctica parece agotar a la criatura, que queda adormilada y vulnerable. ¡Aprovecha ese momento!']
    },
    {
      nombre: "Tiktik",
      src: "../assets/media/personajes/tiktik.webp",
      width: 100,
      vida: [8],
      recompensa: [2],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Acantilados Aulladores', 'Tierras de Reposo'],
      descripcion: ['Usa sus pequeñas y afiladas garras para trepar por paredes y techos.', 'Pasa el tiempo repiqueteando una y otra vez por los caminos y las cavernas cercanas a la superficie del reino. Si eres paciente, puedes esperar a que se acerque a ti y cogerlo.']
    },
    {
      nombre: "Cazador Aspid",
      src: "../assets/media/personajes/cazador-aspid.webp",
      width: 100,
      vida: [15],
      recompensa: [6],
      ubicacion: ['Cruces Olvidados', 'Cuenca Antigua'],
      descripcion: ['Vence a su presa escupiendo líquido corrosivo. Suele cazar en grupo.', 'Depredadores inteligentes que tratarán de atacarte a distancia. No les des espacio, ¡carga contra ellos y córtalos por la mitad! Verás que no son tan inteligentes cuando están muertos.']
    },
    {
      nombre: "Madre Aspid",
      src: "../assets/media/personajes/madre-aspid.webp",
      width: 150,
      vida: [20],
      recompensa: [10],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Lleva los huevos de sus crías dentro de la barriga. Puede dar a luz a crías según lo necesite para ocuparse de los intrusos.', '¡Utiliza sin pudor a sus crías como un arma contra sus enemigos! Deplorable, sí, pero admiro su inventiva. Los buenos cazadores no siempre son buenos padres.']
    },
    {
      nombre: "Cría Aspid",
      src: "../assets/media/personajes/cria-aspid.webp",
      width: 60,
      vida: [5],
      recompensa: ['-'],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Recién nacidas, estos jóvenes aspid rodean a los intrusos de forma instintiva.', '¡Estas crías nacen con un instinto letal! Aunque solo son bebés y puedes destrozarlos con tu aguijón sin pensártelo dos veces. Simplemente, no dejes que te abrumen por sus números.']
    },
    {
      nombre: "Goam",
      src: "../assets/media/personajes/goam.webp",
      width: 100,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['Cruces Olvidados', 'Páramos Fúngicos'],
      descripcion: ['Con su gruesa coraza, emerge del suelo para atrapar a su presa entre sus colmillos.', 'Estas bestias parecen ser inmunes a la mayoría de los daños, por lo que puedes afilar tus armas en su grueso pellejo o simplemente golpearlas para tu propia diversión. Apenas parecen notarlo.']
    },
    {
      nombre: "Cáscara Errante",
      src: "../assets/media/personajes/cascara-errante.webp",
      width: 120,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Vaga por los caminos en los que solía vivir.', 'Estos insectos «civilizados» de Hallownest eran débiles en vida y ahora son igual de débiles muertos. ¡Devuélvelos a la tierra de la que nacieron!']
    },
    {
      nombre: "Cáscara Cabezacuerno",
      src: "../assets/media/personajes/cascara-cabezacuerno.webp",
      width: 100,
      vida: [20],
      recompensa: [4],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Usa su cuerno para atacar a cualquier criatura no infectada que encuentre.', 'Estos insectos dan una sensación de arrogancia, incluso después de morir. ¡Están demasiado orgullosos de sus largos cuernos! Disfruto rompiéndoselos.']
    },
    {
      nombre: "Cáscara Saltarina",
      src: "../assets/media/personajes/cascara-saltarina.webp",
      width: 80,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Saltará de forma instintiva sobre cualquier criatura no infectada que lo ataque.', 'Los insectos del antiguo Hallownest no cazaban su propia comida, sino que otros se la traían. Por eso eran tan débiles. ¡Por eso su reino se desmoronó y se desvaneció!']
    },
    {
      nombre: "Cáscara Matona",
      src: "../assets/media/personajes/cascara-matona.webp",
      width: 100,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Ataca de forma agresiva a cualquier criatura no infectada que encuentre.', 'Estos cadáveres andantes están llenos de una gruesa neblina naranja. Tiene un sabor empalagoso y enfermizo. Me parece repugnante. Tras matar a estas criaturas, te sugiero que no te las comas.']
    },
    {
      nombre: "Cáscara Guerrera",
      src: "../assets/media/personajes/cascara-guerrera.webp",
      width: 180,
      vida: [15],
      recompensa: [6],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Porta un aguijón y una coraza.', 'Estos insectos, ablandados por generaciones de lujo, carecen de garras, coraza propia y veneno. Los que desean protegerse a sí mismos se ven obligados a crear armas con piedras, menas o corazas.']
    },
    {
      nombre: "Cáscara Guardiana",
      src: "../assets/media/personajes/cascara-guardiana.webp",
      width: 260,
      vida: [70],
      recompensa: [45],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Los restos de un gran guardián de los Cruces de Hallownest, reanimados por una extraña fuerza. Su instinto aún le impulsa a defender su puesto de los intrusos.', 'Estos insectos, más grandes y fuertes que sus hermanos, siguen viéndose obligados a robar sus armas de los restos de otras criaturas. No deambulan ni cazan, sino que permanecen en guardia para siempre y atacan a todo aquel que se acerque.']
    },
    {
      nombre: "Restos Sepultados",
      src: "../assets/media/personajes/restos-sepultados.webp",
      width: 240,
      vida: [45],
      recompensa: [15],
      ubicacion: ['Tierras de Reposo'],
      descripcion: ['Restos momificados, deformados y enloquecidos por la infección.', 'Dentro de estos cadáveres renqueantes brilla una luz que perfora las tinieblas. Una vez traté de ver qué había tras la luz... y descubrí algo que brillaba aún más. Algo terrible.']
    },
    {
      nombre: "Falso Caballero",
      src: "../assets/media/personajes/falso-caballero.webp",
      width: 260,
      vida: [355],
      recompensa: ['Emblema de la Ciudad', 200],
      ubicacion: ['Cruces Olvidados', 'Hogar de Dioses'],
      descripcion: ['Un gusano al que una fuerza extraña ha vuelto loco. Vive en una coraza blindada robada.', 'A las criaturas débiles les encanta robar la fuerza de los demás. Sus vidas son efímeras y están llenas de miedo, pero anhelan tener el poder para dominar a quienes los han dominado.']
    },
    {
      nombre: "Gusano",
      src: "../assets/media/personajes/gusano.webp",
      width: 100,
      vida: [5],
      recompensa: [2],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Los miembros más débiles del reino de Hallownest. Se les solía menospreciar y obligar a hacer trabajos de baja categoría.', 'Estas indefensas criaturas, compuestas principalmente de grasa dulce, son unas provisiones excelentes para largos viajes. Están más buenos asados en una hoguera. Si tratan de negociar por sus vidas, ignóralos. No tienen nada que ofrecer.']
    },
    {
      nombre: "Insecto Reparador",
      src: "../assets/media/personajes/insecto-reparador.webp",
      width: 140,
      vida: [5],
      recompensa: ['-'],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Miembro de un huidizo gremio de insectos empecinado en el mantenimiento de las numerosas señales y postes de Hallownest.', 'Los insectos de Hallownest estaban obsesionados con construir cosas. Qué mentes más extrañas tenían.']
    },
    {
      nombre: "Germen de Vida",
      src: "../assets/media/personajes/germen-de-vida.webp",
      width: 60,
      vida: [1],
      recompensa: ['1 Máscara de Saviavida'],
      ubicacion: ['Paso del Rey', 'Montículo Ancestral', ' Nido Profundo', 'Cañón Nublado', 'Sendero Verde', 'Límite del Reino', 'Aldea Mantis'],
      descripcion: ['Pequeño y veloz germen relleno de saviavida, que se puede extraer y consumir para disfrutar de sus propiedades saludables.', 'El líquido brillante del interior de estos pequeñines es delicioso y, si lo bebes, hará que te sientas más fuerte. Me pregunto cómo sabrán mis propias entrañas... ¿sería una cosa horrorosa tratar de beber un poco de ellas?']
    },
    {
      nombre: "Baldur",
      src: "../assets/media/personajes/baldur.webp",
      width: 100,
      vida: [15],
      recompensa: [4],
      ubicacion: ['Cruces Olvidados', 'Montículo Cristalizado', 'Acantilados Aulladores'],
      descripcion: ['Se hace una bola y se lanza contra los intrusos que se adentran en su territorio. Agresivo incluso siendo recién nacido.', 'A los jóvenes cazadores les encanta capturar a estas criaturas y practicar deporte con ellas. Te animo a que lo pruebes, si te pica el gusanillo.']
    },
    {
      nombre: "Baldur Anciano",
      src: "../assets/media/personajes/baldur-anciano.webp",
      width: 220,
      vida: [60],
      recompensa: [50],
      ubicacion: ['Cruces Olvidados', 'Acantilados Aulladores', 'Montículo Ancestral'],
      descripcion: ['Corpulento y cubierto de gruesas placas. Se retrae sobre sí mismo cuando se le ataca.', 'A medida que envejecen, estas criaturas se vuelven demasiado pesadas y toscas para rodar libremente. En vez de eso, se hacen una bola y se ocultan del mundo. ¿En qué pensarán allí, enrolladas sobre sí mismas? Más tiempo de paz y tranquilidad, quizás.']
    },
    {
      nombre: "Trepamusgo",
      src: "../assets/media/personajes/trepamusgo.webp",
      width: 100,
      vida: [10],
      recompensa: [2],
      ubicacion: ['Sendero Verde', 'Jardines de la Reina'],
      descripcion: ['Debilucho que se cubre con hojas para parecer más grande. Se oculta entre los matorrales.', 'Solía pensar que estas cosas no eran más que plantas caminantes. Cuando descubrí que en realidad eran criaturas vivas, empecé a matarlas de inmediato. ¡Esa es la naturaleza de la caza!']
    },
    {
      nombre: "Musgolula",
      src: "../assets/media/personajes/musgolula.webp",
      width: 100,
      vida: [15],
      recompensa: [2],
      ubicacion: ['Cañón Nublado', 'Jardines de la Reina'],
      descripcion: ['Debilucho volador que se cubre con hojas para parecer más grande. Se oculta entre los matorrales y huye si se le acercan depredadores.', 'Pasa toda su vida escondiéndose o huyendo. Qué triste. ¿O quizás esta es la vida que han elegido y la disfrutan? Es una idea extraña, pero no imposible.']
    },
    {
      nombre: "Musgoso",
      src: "../assets/media/personajes/musgoso.webp",
      width: 140,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Insecto con forma de planta que carga cuando un enemigo se acerca.', 'A veces es difícil detectarlo entre el follaje. Cuando menos te lo esperas aparece a tu lado y carga contra ti. Ve con cuidado.']
    },
    {
      nombre: "Musgoso Volátil",
      src: "../assets/media/personajes/musgoso-volatil.webp",
      width: 140,
      vida: [15],
      recompensa: [5],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Insecto con forma de planta inflamado por la infección. Cuando siente una amenaza libera gas.', 'El gas que emiten sus brotes posee un aroma atrayente. ¡Pero si te acercas demasiado disolverá tu coraza y tu carne!']
    },
    {
      nombre: "Engulletontos",
      src: "../assets/media/personajes/engulletontos.webp",
      width: 120,
      vida: [16],
      recompensa: [9],
      ubicacion: ['Sendero Verde', 'Jardines de la Reina'],
      descripcion: ['Planta carnívora que ataca a cualquier criatura que se le acerque.', 'Tienes que ser un auténtico tonto para dejarte engañar por una planta.']
    },
    {
      nombre: "Mosquito",
      src: "../assets/media/personajes/mosquito.webp",
      width: 100,
      vida: [10],
      recompensa: [5],
      ubicacion: ['Sendero Verde', 'Montículo descuidado'],
      descripcion: ['Se lanza contra su presa con su trompa en forma de aguja.', 'Cuando te embistan, no te dejes llevar por el pánico. Mantente firme y golpéales cuando se acerquen.']
    },
    {
      nombre: "Obble",
      src: "../assets/media/personajes/obble.webp",
      width: 100,
      vida: [10],
      recompensa: [4],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Insecto gordo, lento y volador. Suele soltar un líquido ácido que guarda en su cuerpo rechoncho.', 'Se da cuenta de lo molesto que resulta? ¿Moviéndose de un lado a otro sin rumbo y derramando sus jugos nocivos allí por donde pasa? Si te topas con alguno, asegúrate de matarlo.']
    },
    {
      nombre: "Gulka",
      src: "../assets/media/personajes/gulka.webp",
      width: 140,
      vida: [10],
      recompensa: [6],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Un agresivo ser vegetal que se retrae de forma proactiva cuando siente peligro cerca. Escupe bolas duras y espinosas cuando sus enemigos se encuentran a distancia.', 'Sus hojas son secas y sosas. El capullo es desagradablemente agrio, pero ¡oh! El veneno de esas bolas que escupe... ¡Exquisito! Si te sobra tiempo, trata de beber un poco y disfrutar de sus efectos.']
    },
    {
      nombre: "Libemáscara",
      src: "../assets/media/personajes/libemascara.webp",
      width: 90,
      vida: [1],
      recompensa: ['-'],
      ubicacion: ['Sendero Verde', 'Jardines de la Reina'],
      descripcion: ['Criatura voladora inofensiva a la que le gustan los entornos tranquilos. Normalmente viajan en bandadas.', 'Todos están alertas ante el peligro y cuando uno escapa, el resto lo siguen. Me pregunto qué se siente al contar con la protección de una manada.']
    },
    {
      nombre: "Musgoagresor",
      src: "../assets/media/personajes/musgoagresor.webp",
      width: 200,
      vida: [15],
      recompensa: [8],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Tímida criatura que asusta a los intrusos cubriéndose con enormes trozos de musgo.', 'Es pequeño, pero saca mucho coraje y fortaleza una vez que se cubre de follaje. Y puedo comprender el deseo de camuflarse...']
    },
    {
      nombre: "Musgoagresor Gigante",
      src: "../assets/media/personajes/musgoagresor-gigante.webp",
      width: 250,
      vida: [100],
      recompensa: [120],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Una familia de criaturas que ha aprendido a fusionarse con musgo y forman un solo ser.', 'Es cierto, la unión hace la fuerza, pero estas criaturas nunca fueron demasiado fuertes de por sí. ¡Haz pedazos su artimaña!']
    },
    {
      nombre: "Musgocaballero",
      src: "../assets/media/personajes/musgocaballero.webp",
      width: 200,
      vida: [50],
      recompensa: [40],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Protector de Sendero Verde, adiestrado en las artes del aguijón y la coraza.', 'Se ocultan como montículos con forma de arbusto y parecen débiles, ¡pero ten cuidado con estos guerreros! Son incansables en combate y protegen con fiereza algo que se oculta en el Sendero Verde.']
    },
    {
      nombre: "Vagabundo Musgoso",
      src: "../assets/media/personajes/vagabundo-musgoso.webp",
      width: 180,
      vida: [25],
      recompensa: [8],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Vago y corpulento musgoso. Se deja influir con facilidad por los demás.', 'Lento, gordo y fácil de derrotar; características comunes en quienes se olvidan de su vocación y abandonan sus deberes.']
    },
    {
      nombre: "Durandoo",
      src: "../assets/media/personajes/durandoo.webp",
      width: 150,
      vida: [30],
      recompensa: [6],
      ubicacion: ['Sendero Verde', 'Páramos Fúngicos'],
      descripcion: ['Simple criatura andante metida en una dura coraza. Se suele encontrar vadeando en estanques pocos profundos de agua ácida.', 'Una de las pocas criaturas que pueden sobrevivir en los ríos de abrasadora agua ácida que fluyen en torno a nosotros. ¿De dónde viene este agua? Burbujea y escupe con un furioso odio hacia los vivos...']
    },
    {
      nombre: "Duranda",
      src: "../assets/media/personajes/duranda.webp",
      width: 180,
      vida: [30],
      recompensa: [4],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Simple criatura voladora protegida por una coraza espinosa.', 'Cree estar completamente protegido y por ello no se preocupa por quienes pasan a su lado. Ataca su rostro y enséñale que de nada se está nunca a salvo.']
    },
    {
      nombre: "Aluba",
      src: "../assets/media/personajes/aluba.webp",
      width: 200,
      vida: [10],
      recompensa: ['-'],
      ubicacion: ['Sendero Verde', ' Jardines de la Reina'],
      descripcion: ['Un ser tranquilo que prefiere planear cerca de aguas corrosivas.', 'Qué vida más despreocupada llevan cuando flotan sobre nosotros. Pero si alguno se acerca demasiado al suelo...']
    },
    {
      nombre: "Luméula Eléctrica",
      src: "../assets/media/personajes/lumelula-electrica.webp",
      width: 180,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['Cañón Nublado', ' Sendero Verde'],
      descripcion: ['Cuando se sienten amenazadas se agrupan y emiten electricidad.', 'Normalmente vuelan pacíficamente, pero a veces se agrupan y emiten un relámpago brillante y chisporroteante capaz de aturdir y quemar incluso a grandes criaturas como yo. Busca un hueco por el que puedas pasar y deslízate rápidamente.']
    },
    {
      nombre: "Uoma",
      src: "../assets/media/personajes/uoma.webp",
      width: 100,
      vida: [1],
      recompensa: ['-'],
      ubicacion: ['Cañón Nublado', ' Archivos de la Maestra'],
      descripcion: ['La forma gelatinosa más pequeña. Es pasivo y no parecen darse cuenta de nada, pero desprende peligrosas cargas eléctricas.', '¿El espíritu de un ancestro muerto? ¿El cerebro de una criatura más grande, al que se le permite vagar libremente? ¿Un huevo en busca de un lugar seguro para eclosionar? No tengo ni idea de qué se trata.']
    },
    {
      nombre: "Ooma",
      src: "../assets/media/personajes/ooma.webp",
      width: 100,
      vida: [1],
      recompensa: [5],
      ubicacion: ['Cañón Nublado', ' Archivos de la Maestra'],
      descripcion: ['Su exterior pasivo protege un núcleo agresivo y explosivo.', 'Criatura espeluznante y horrible hecha de un líquido grueso. Puedes ver a través de ella, pero no dónde guarda sus pensamientos. No me fío de ella para nada. Mantente alejado.']
    },
    {
      nombre: "Uumuu",
      src: "../assets/media/personajes/uumuu.webp",
      width: 220,
      vida: [300],
      recompensa: ['-'],
      ubicacion: ['Archivos de la Maestra'],
      descripcion: ['Ser inteligente que protege la cámara interior de los Archivos de la Maestra.', 'El desfiladero de abajo, el que está repleto de neblina y chisporrotea con una energía extraña... un cazador puede perder todos sus sentidos allí abajo. Ten cuidado... allí acechan cosas extrañas y antinaturales.']
    },
    {
      nombre: "Ambloom",
      src: "../assets/media/personajes/ambloom.webp",
      width: 100,
      vida: [12],
      recompensa: [2],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Un hongo reptante y simplón. Su sombrero está cubierto de una capa de espinas endurecidas.', 'Túmbate boca abajo, abre el hocico y deja que este sabroso bocado se deslice directamente a tu estómago.']
    },
    {
      nombre: "Fungicría",
      src: "../assets/media/personajes/fungicria.webp",
      width: 100,
      vida: [10],
      recompensa: [2],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Globo fúngico pasivo. Sus gases internos hacen que flote.', 'No es más que una cría y se desplaza a la deriva con los ojos cerrados y una mente abierta. Cuando era joven, mis hermanos y hermanas y yo tratábamos de cazarnos los unos a los otros en el nido. Ahora cazo solo.']
    },
    {
      nombre: "Funglobo",
      src: "../assets/media/personajes/funglobo.webp",
      width: 200,
      vida: [15],
      recompensa: [6],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Globo fúngico totalmente crecido. Escupe los gases internos que acumula a sus agresores.', '¡Parece una pelota! Creo que nunca he visto a una criatura más redonda que esta. No hay duda de que este mundo oculta algunas criaturas maravillosas. ¡Debo cazarlas a todas!']
    },
    {
      nombre: "Sporg",
      src: "../assets/media/personajes/sporg.webp",
      width: 100,
      vida: [25],
      recompensa: [3],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Detecta los movimientos cercanos y dispara esporas explosivas que van a la deriva hacia su objetivo.', 'Si eres hábil, puedes redirigir las esporas hacia ellos y observar cómo perecen en una explosión que ellos mismos han creado. Se puede sacar una lección de esto, creo.']
    },
    {
      nombre: "Restos Fungificados",
      src: "../assets/media/personajes/restos-fungificados.webp",
      width: 200,
      vida: [15],
      recompensa: [5],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Los restos de un insecto, consumidos por un hongo. Suele liberar nubes de un gas denso y mortífero.', '¡Los insectos de Hallownest son tan patéticos que tienen más posibilidades de sobrevivir cuando están infectados por hongos venenosos! Son realmente unas criaturas absurdas.']
    },
    {
      nombre: "Seticría",
      src: "../assets/media/personajes/seticria.webp",
      width: 60,
      vida: [3],
      recompensa: ['-'],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Joven criatura fúngica. Pasa la mayoría del tiempo en la tierra, pero puede arrancar sus raíces de ella y huir si se siente en peligro.', 'Parece una seta normal hasta que te acercas. Entonces salta del suelo y empieza a correr de un lado a otro sin ver nada. Es muy, muy divertido.']
    },
    {
      nombre: "Fungiguerrero",
      src: "../assets/media/personajes/fungiguerrero.webp",
      width: 150,
      vida: [20],
      recompensa: [8],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Criatura fúngica que ataca a los intrusos para proteger a sus crías.', '¡Algo extraño en el aire ha provocado que a estas setas les salgan corazones, mentes e incluso rostros! Eso quiere decir que ahora tienen miedo por su vida, como todas las demás criaturas vivas.']
    },
    {
      nombre: "Fungiogro",
      src: "../assets/media/personajes/fungiogro.webp",
      width: 200,
      vida: [80],
      recompensa: [45],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Enorme criatura fúngica. Ataca escupiendo veneno corrosivo y embistiendo con su cuerpo a sus enemigos.', '¿Estas enormes cosas son bestias o son setas? Corté una por la mitad para ver lo que tenía dentro, pero no pude encontrar ninguna respuesta en sus suaves y apestosas entrañas.']
    },
    {
      nombre: "Joven Mantis",
      src: "../assets/media/personajes/joven-mantis.webp",
      width: 180,
      vida: [15],
      recompensa: [5],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Miembro de una orgullosa tribu, quien protege ferozmente su territorio. Lanza ataques punzantes con su abdomen con forma de aguja afilada.', 'Conforme crece, pierde la capacidad de volar. Se suele celebrar el paso a la edad adulta, pero a medida que transcurre el tiempo, nos damos cuenta de lo que hemos perdido.']
    },
    {
      nombre: "Guerrero Mantis",
      src: "../assets/media/personajes/guerrero-mantis.webp",
      width: 260,
      vida: [20],
      recompensa: [12],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Miembro de una orgullosa tribu, quien protege ferozmente su territorio. Lanza ataques salvajes con sus afiladas extremidades.', 'Si te adentras demasiado en los bosques fúngicos, estos guerreros se interpondrán en tu camino. ¿Qué es lo que protegen allí en lo más profundo de su territorio?']
    },
    {
      nombre: "Señores Mantis",
      src: "../assets/media/personajes/señores-mantis.webp",
      width: 260,
      vida: [530],
      recompensa: ['Entrada a Nido Profundo', 'Marca de Orgullo', 'Sello de Hollownest', 620],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Son los líderes de la tribu mantis, y sus mejores guerreros. Portan finas lanzas aguijón, y atacan con la velocidad del rayo.', 'La tribu mantis y los insectos de Hallownest no se llevaban demasiado bien. Sin embargo, las mantis consiguieron sobrevivir a sus rivales, y su civilización aún perdura.']
    },
    {
      nombre: "Cáscara Centinela",
      src: "../assets/media/personajes/cascara-centinela.webp",
      width: 100,
      vida: [25],
      recompensa: [10],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Los restos reanimados de un centinela de Hallownest. Aún conserva algunos recuerdos de su anterior cometido.', 'Más habilidoso en combate que la mayoría de los insectos de Hallownest, es ágil, aunque ligeramente blindado. No le des ni un respiro.']
    },
    {
      nombre: "Centinela Pesado",
      src: "../assets/media/personajes/centinela-pesado.webp",
      width: 260,
      vida: [35],
      recompensa: [10],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Los restos reanimados de un gran centinela de Hallownest. Uno de los pocos de Hallownest lo suficientemente fuertes para empuñar un gran aguijón.', 'Sorprendentemente astuto para un cadáver. Tratará de agarrarte si saltas por encima de él y puede perseguirte si huyes. Es divertido cazarlo, pero ten cuidado si van en grupo.']
    },
    {
      nombre: "Centinela Alado",
      src: "../assets/media/personajes/centinela-alado.webp",
      width: 250,
      vida: [25],
      recompensa: [12],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Centinela volador de Hallownest. Patrulla las alturas de la enorme caverna en la que se levanto la ciudad.', 'Baila por el aire fuera de tu alcance hasta que encuentra una apertura y, luego, se abalanza para asestar un golpe decisivo. Si estas seguro de ti mismo, espera a que se acerque a ti y contraataca.']
    },
    {
      nombre: "Centinela Lancero",
      src: "../assets/media/personajes/centinela-lancero.webp",
      width: 260,
      vida: [25],
      recompensa: [12],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Centinela alado de Hallownest equipado con una lanza aguijón. Carga contra las amenazas o tira su lanza a distancia.', 'Este taimado enemigo mantendrá a menudo la distancia y tratará de acabar contigo con sus armas arrojadizas. Cuando cargue contra ti, salta y destrúyelo.']
    },
    {
      nombre: "Error",
      src: "../assets/media/personajes/error.webp",
      width: 160,
      vida: [13],
      recompensa: [3],
      ubicacion: ['Santuario de Almas'],
      descripcion: ['Fue una vez un insecto muy inteligente, pero ahora está deformado por usar mal el alma.', 'Estos insensatos juguetearon con el alma de otras criaturas y perdieron su forma. Ahora merodean por las sombras de su Santuario como babosas y esperan que sus antiguos hermanos les construyan nuevos cuerpos.']
    },
    {
      nombre: "Folly",
      src: "../assets/media/personajes/folly.webp",
      width: 140,
      vida: [13],
      recompensa: [5],
      ubicacion: ['Santuario de Almas'],
      descripcion: ['Fue una vez un insecto muy inteligente, pero ahora está inflado por usar mal el alma.', 'He oído susurros de que el secreto que buscaban estos insensatos era la inmortalidad. Vivir para siempre... ¡Nunca he escuchado nada más obsceno!']
    },
    {
      nombre: "Tuercealmas",
      src: "../assets/media/personajes/tuercealmas.webp",
      width: 200,
      vida: [35],
      recompensa: [25],
      ubicacion: ['Santuario de Almas'],
      descripcion: ['Insecto muy inteligente que usa conocimientos arcanos para convertir el alma en despiadados hechizos.', 'He oído a otros hablar sobre el «alma», pero yo no entiendo de qué se trata realmente. Sé que la carne recién matada es la que mejor sabe; ¿será porque el «alma» aún se aferra a ella?']
    },
    {
      nombre: "Guerrero del Alma",
      src: "../assets/media/personajes/guerrero-del-alma.webp",
      width: 180,
      vida: [180, 300],
      recompensa: [200],
      ubicacion: ['Santuario de Almas', 'Coliseo de los Insensatos'],
      descripcion: ['Insecto erudito que empuña una refinada aguja. Aumenta su destreza en combate con el alma reunida.', 'A estos extraños guerreros les siguen susurros allí donde vayan. No solo son hábiles con el aguijón, sino que también pueden usar un poder extraño para pasar de repente de un lugar a otro. Permanece alerta.']
    },
    {
      nombre: "Maestro de Almas",
      src: "../assets/media/personajes/maestro-de-almas.webp",
      width: 250,
      vida: [385],
      recompensa: ['Salto Desolador'],
      ubicacion: ['Santuario de Almas', 'Hogar de Dioses'],
      descripcion: ['Líder del Santuario de Almas. Acumuló alma con la esperanza de mantener a raya el infortunio de Hallownest, pero terminó intoxicándose de su poder.', 'Los insectos de Hallownest probaron todo tipo de trucos, rituales y plegarias para deshacerse de la infección. ¡Pero nada les dio resultado! Quizás la infección provenía de algo en su interior de lo que no podían escapar.']
    },
    {
      nombre: "Cáscara Dandy",
      src: "../assets/media/personajes/cascara-dandy.webp",
      width: 70,
      vida: [20],
      recompensa: [9],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Antiguo miembro de la alta sociedad de Hallownest. Su habilidad ofensiva es muy limitada.', 'Parece ser que los miembros más débiles y codiciosos de Hallownest también eran los que ejercían más influencia. Ese reino siempre estaba abocado a su destrucción.']
    },
    {
      nombre: "Cáscara Cobarde",
      src: "../assets/media/personajes/cascara-cobarde.webp",
      width: 90,
      vida: [20],
      recompensa: [11],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Antiguo miembro de la alta sociedad de Hallownest. Aunque una fuerza en su interior hace que sea agresivo, sus antiguos instintos a veces le empujan a huir del peligro.', '¡La naturaleza temerosa y cobarde de estos insectos de Hallownest perdura incluso tras la muerte! Casi resulta vergonzoso perseguirlos y acabar con ellos.']
    },
    {
      nombre: "Cáscara Glotona",
      src: "../assets/media/personajes/cascara-glotona.webp",
      width: 120,
      vida: [30],
      recompensa: [11],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Antiguo miembro de la alta sociedad de Hallownest. Usa su corpulento cuerpo como un arma.', 'A medida que estos insectos se hacían más ricos, cazaban menos y consumían más, con lo que al final adoptaban una grotesca forma no muy alejada de la de una fruta demasiado madura.']
    },
    {
      nombre: "Restos Brillantes",
      src: "../assets/media/personajes/restos-brillantes.webp",
      width: 180,
      vida: [220],
      recompensa: [420],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Una carcasa corpulenta que lleva incrustado un metal resplandeciente. Conserva el instinto de acumular geo.', 'Hay muchas cosas hermosas en el mundo. Los reflejos de la luz en el agua, el sabor de la presa a la que acabas de matar, el llanto de una cría que llama a su madre... Pero nunca he entendido el deseo de acumular metales y piedras.']
    },
    {
      nombre: "Gran Cáscara Centinela",
      src: "../assets/media/personajes/gran-cascara-centinela.webp",
      width: 250,
      vida: [170],
      recompensa: [50],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Los restos reanimados de un gran centinela, la élite de los guardias de la ciudad. Porta un gran aguijón y una coraza. Sus potentes ataques infligen mucho daño.', 'Se trata de algo extremadamente raro, un insecto de Hallownest que supone una amenaza. Obsérvalos con cuidado, ya que pueden atacar súbitamente y propinar golpes devastadores.']
    },
    {
      nombre: "Caballero Vigía",
      src: "../assets/media/personajes/caballero-vigia.webp",
      width: 240,
      vida: [220],
      recompensa: ['Sello de Hollownest', 'Acceso a Lurien el Vigilante', 650],
      ubicacion: ['Torre del Vigía'],
      descripcion: ['Coraza de un Caballero vigía, reanimada por un enjambre de moscas infectadas.', 'Cuando estos silenciosos guerreros caen en batalla, sus cuerpos se abren y de ellos salen volando extraños insectos. Me pregunto qué saldrá volando de mí cuando muera. ¿Mis esperanzas y mis miedos saldrán disparados hasta perderse en la oscuridad?']
    },
    {
      nombre: "Coleccionista",
      src: "../assets/media/personajes/coleccionista.webp",
      width: 250,
      vida: [750],
      recompensa: ['Mapa del Coleccionista', '3 Larvas cautivas'],
      ubicacion: ['Torre del Amor'],
      descripcion: ['Esta sombra tenebrosa está encerrada en la Torre del Amor. Conserva a las criaturas de Hallownest en jarras de cristal, aunque está particularmente interesada en las larvas.', 'Una sombra que se desliza por las cavernas realizando extraños sonidos. Nunca la he visto con claridad, así que no sé qué tipo de criatura es.']
    },
    {
      nombre: "Barrílula",
      src: "../assets/media/personajes/barrilula.webp",
      width: 120,
      vida: [5],
      recompensa: [2],
      ubicacion: ['Ciudad de Lágrimas', 'Tierras de Reposo', 'Canales Reales', 'Cuenca Antigua', 'Límite del Reino', ' Coliseo de los Insensatos'],
      descripcion: ['Sus finas alas ocultan una barriga muy volátil. Sacrificará su propia vida para proteger su territorio.', 'Una criatura furiosa que no aprecia su propia vida. Una criatura sin miedo... ¿de verdad se le puede llamar «presa»?']
    },
    {
      nombre: "Pilflip",
      src: "../assets/media/personajes/pilflip.webp",
      width: 140,
      vida: [30],
      recompensa: [5],
      ubicacion: ['Canales Reales'],
      descripcion: ['Extraña criatura que se adapta a los cambios de su entorno dándose la vuelta y utilizando las extremidades situadas al otro lado de su cuerpo.', 'La adaptabilidad es una importante habilidad de supervivencia. Si un problema parece insuperable, prueba a afrontarlo desde un ángulo distinto.']
    },
    {
      nombre: "Hwurmp",
      src: "../assets/media/personajes/hwurmp.webp",
      width: 200,
      vida: [25],
      recompensa: [5],
      ubicacion: ['Canales Reales'],
      descripcion: ['Diminuto y plácido, pero se hincha hasta adoptar un tamaño enorme cuando se siente amenazado.', 'Una criatura extremadamente divertida.']
    },
    {
      nombre: "Saco Viscoso",
      src: "../assets/media/personajes/saco-viscoso.webp",
      width: 120,
      vida: [20],
      recompensa: ['Huevo Podrido'],
      ubicacion: ['Cumbre de Cristal', 'Nido Profundo', 'Límite del Reino', 'Canales Reales', 'Jardines de la Reina'],
      descripcion: ['Una criatura tranquila, pero repugnante. Guarda huevos podridos en sus entrañas.', 'Resulta fácil de encontrar si se tiene sentido del olfato. Si encuentras uno de sus huevos, te recomiendo que no te lo comas.']
    },
    {
      nombre: "Defensor del Estiércol",
      src: "../assets/media/personajes/defensor-del-estiercol.webp",
      width: 240,
      vida: [700],
      recompensa: ['Blasón del Defensor', 'Acceso a la Arboleda de Isma'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Un hábil guerrero que vive en el corazón de los Canales. Ataca a los intrusos con esferas compactas de estiércol.', 'Luchar por «honor» o por «lealtad»... es lo mismo que luchar por cenizas. Si quieres matar, hazlo por tu propio bien. Así se comporta un auténtico cazador.']
    },
    {
      nombre: "Defensor Blanco",
      src: "../assets/media/personajes/defensor-blanco.webp",
      width: 220,
      vida: [1600],
      recompensa: ['300 de Esencia (primera victoria)', 'Estatua de estiércol del Caballero (quinta victoria)'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Figura de un pasado recordado con afecto. Reacciona galantementeante la derrota volviéndose mas fuerte.', 'La llamada del campeón, la arboleda enredada, la batalla del Wyrm Negro... Lo recuerdo todo. Me llevaré esa gloria conmigo siempre... hasta que nos volvamos a encontrar.']
    },
    {
      nombre: "Tremacría",
      src: "../assets/media/personajes/tremacria.webp",
      width: 60,
      vida: [15],
      recompensa: ['-'],
      ubicacion: ['Canales Reales'],
      descripcion: ['El más joven de su especie. Su cuerpo se compone de dientes, alas y estómago.', 'Parece querer aferrarse a cualquier ser vivo que se le acerque con sus pequeños y afilados dientes. Aunque deja a los de su especie tranquilos, por lo que no es completamente descerebrado.']
    },
    {
      nombre: "Tremadora",
      src: "../assets/media/personajes/tremadora.webp",
      width: 80,
      vida: [55],
      recompensa: [6],
      ubicacion: ['Canales Reales'],
      descripcion: ['Criatura con forma de gusano que prefiere hábitats húmedos y oscuros.', 'Enemigos peligrosos e impredecibles que infectan las tuberías de debajo de la capital de Hallownest. Incluso cuando parezca que los has matado, debes mantenerte alerta.']
    },
    {
      nombre: "Tremaenorme",
      src: "../assets/media/personajes/tremaenorme.webp",
      width: 180,
      vida: [150],
      recompensa: [23],
      ubicacion: ['Canales Reales'],
      descripcion: ['Viejo trematodo, ha crecido gracias a los ricos desechos que se pueden encontrar en las tuberías bajo la capital.', 'Cuando los depredadores tienen demasiado éxito la comida en exceso que comen se convierte en una fina capa pegada a sus cuerpos. Aun así, al menos, estas criaturas parecen hacer buen uso de su peso adicional.']
    },
    {
      nombre: "Tremarmita",
      src: "../assets/media/personajes/tremarmita.webp",
      width: 160,
      vida: [350],
      recompensa: ['Tremanido'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Un reproductor insaciable. Ha poblado los Canales con los de su especie. Sus entrañas actúan como un nido para las jóvenes tremacrías.', 'El deseo de reproducirse, de dejar atrás un recuerdo de nosotros en forma de un descendiente... parece estar bien impregnado en el corazón de toda criatura viva. Yo también he sentido el reclamo de ese instinto básico.']
    },
    {
      nombre: "Fragmentita",
      src: "../assets/media/personajes/fragmentita.webp",
      width: 160,
      vida: [15],
      recompensa: [2],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Se alimenta de polvo de cristal y usa púas cristalizadas para protegerse del peligro.', 'Esta criatura no me parece especialmente resaltable ni interesante. Debería aprender a volar, a respirar fuego o a cantar de forma espeluznante. Cualquier cosa que justificara su existencia.']
    },
    {
      nombre: "Brillomo",
      src: "../assets/media/personajes/brillomo.webp",
      width: 200,
      vida: [35],
      recompensa: [6],
      ubicacion: ['Cruces Olvidados', 'Cumbre de Cristal'],
      descripcion: ['Criatura dura y lenta. Los cristales que crecen en su lomo le confieren una protección extra ante los enemigos aéreos.', 'De gran tamaño y bien protegido, aunque lento y dócil. Los insectos de Hallownest solían obligar a estas criaturas a tirar de sus carros y máquinas.']
    },
    {
      nombre: "Cazador de Cristal",
      src: "../assets/media/personajes/cazador-de-cristal.webp",
      width: 80,
      vida: [25],
      recompensa: [6],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Dispara fragmentos de cristales que crecen rápidamente a los intrusos.', 'Hacen de la cima del mundo su hogar. ¿Usan sus cristales voluntariamente como armas o son simplemente huéspedes y los cristales, parásitos?']
    },
    {
      nombre: "Reptador de Cristal",
      src: "../assets/media/personajes/reptador-de-cristal.webp",
      width: 80,
      vida: [5],
      recompensa: [8],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Lanza rayos de luz abrasadores desde los cristales de su lomo mientras se arrastra, aunque no parece darse cuenta de ello.', 'Estas criaturas pueden parecer débiles, pero a veces surgen ardientes pilares de calor de los cristales que llevan en sus lomos. ¡Ten cuidado y mide bien tus golpes!']
    },
    {
      nombre: "Cáscara Minera",
      src: "../assets/media/personajes/cascara-minera.webp",
      width: 100,
      vida: [20],
      recompensa: [10],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Los restos de un insecto atraído a la Cumbre de Cristal por sus cristales preciosos. Su garra-pico también actúa como un arma feroz.', 'Los insectos de Hallownest codiciaban las cosas más extrañas cuando vivían. Cavaban de forma furtiva en la tierra en busca de piedras, menas y, en especial, los cristales que crecen en la cima del mundo.']
    },
    {
      nombre: "Cáscara Cristalizada",
      src: "../assets/media/personajes/cascara-cristalizada.webp",
      width: 110,
      vida: [35],
      recompensa: [20],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Los restos de un insecto que murió entre los cristales. Reanimado por una extraña fuerza, ataca lanzando rayos de luz desde sus brazos cristalizados.', 'Los cristales que crecen en las cumbres ocultan algún tipo de poder extraño. Centellean y brillan en la oscuridad, y cada uno tiene un punto brillante que emite un calor abrasador. También cantan, si los escuchas. Muy suavemente...']
    },
    {
      nombre: "Guardian de Cristal",
      src: "../assets/media/personajes/guardian-de-cristal.webp",
      width: 180,
      vida: ['280 / 450'],
      recompensa: [385 + ' (Primer combate)', 550 + ' (Segundo combate)', 'Fragmento de Máscara (Segundo combate)'],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Corpulento minero de la Cumbre de Cristal cuyo cuerpo se ha visto superado por los cristales que le han crecido. Puede lanzar rayos de luz abrasadores desde sus extremidades cristalizadas.', '¿Cómo verá el mundo esta criatura que lo mira a través de su prisión de cristal? ¿Solo ve luz? ¿Es eso lo que lo enloquece de esa forma?']
    },
    {
      nombre: "Vengamosca Colérica",
      src: "../assets/media/personajes/vengamosca-colerica.webp",
      width: 180,
      vida: [40],
      recompensa: [20],
      ubicacion: ['Cruces Infectados', 'Coliseo de los Insensatos'],
      descripcion: ['Vengamosca cuyo cuerpo se ha deformado a causa de la continua infección. Muy agresiva.', 'La infección que pasa de una criatura a otra otorga fuerza y coraje, pero también parece esclavizar la voluntad. ¿Estarías dispuesto a aceptar un trato así?']
    },
    {
      nombre: "Gruzzer Volátil",
      src: "../assets/media/personajes/gruzzer-volatil.webp",
      width: 100,
      vida: [40],
      recompensa: [15],
      ubicacion: ['Cruces Infectados', 'Coliseo de los Insensatos'],
      descripcion: ['Gruzzer hinchado por la infección y a punto de explotar.', 'Una horrible sustancia viscosa y gases nocivos han empezado a gotear desde arriba. ¿Existe una fuente de toda esta pestilencia? Si es así, yo no la he visto.']
    },
    {
      nombre: "Cáscara Violenta",
      src: "../assets/media/personajes/cascara-violenta.webp",
      width: 100,
      vida: [40],
      recompensa: [15],
      ubicacion: ['Cruces Infectados'],
      descripcion: ['Enloquecido por una enorme infección. Se abalanza sobre los enemigos sin pensar en su propia seguridad.', 'Los insectos de Hallownest quedaron completamente deformados a causa de esa antigua enfermedad. Primero se sumieron en un profundo sueño, después despertaron con las mentes rotas y, por último, sus cuerpos empezaron a mutar...']
    },
    {
      nombre: "Cáscara Babeante",
      src: "../assets/media/personajes/cascara-babeante.webp",
      width: 100,
      vida: [15],
      recompensa: [17],
      ubicacion: ['Cruces Infectados'],
      descripcion: ['El cuerpo de un insecto, completamente consumido por la infección. Escupe líquido corrosivo.', 'La infección que asoló Hallownest hace tanto tiempo... dicen que cuanto más luchabas contra ella, más te consumía.']
    },
    {
      nombre: "Cavasuelos",
      src: "../assets/media/personajes/cavasuelos.webp",
      width: 160,
      vida: [20],
      recompensa: [6],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Depredador de Nido Profundo que se mueve en manada. Escarba en la tierra y emerge de ella para sorprender a su presa.', 'Elásticos y despiadados, estos cazadores tratarán de abrumarte con sus números en las cavernas serpenteantes, estrechas y oscuras en las que hurgan en el suelo. ¡Permanece siempre alerta!']
    },
    {
      nombre: "Eclosionador Cavador",
      src: "../assets/media/personajes/eclosionador-cavador.webp",
      width: 200,
      vida: [30],
      recompensa: [25],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Criatura voladora que dispara cavasuelos de su cuerpo cuando se le acerca una posible presa.', '¿Son estas criaturas las madres de los cavauelos? Solo parecen estar vagamente relacionados. ¿Pero cómo se meten los cavauelos dentro de los eclosionadores? Una situación confusa.']
    },
    {
      nombre: "Garpiés",
      src: "../assets/media/personajes/garpies.webp",
      width: 120,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['Nido Profundo', 'Coliseo de los Insensatos'],
      descripcion: ['Excavador gigante cubierto de un caparazón hecho de gruesas placas. Viaja de forma incansable por los túneles de Nido Profundo.', 'Son monstruosamente fuertes e inmunes a cualquier ataque sobre sus cuerpos fuertemente blindados. Por suerte, si te limitas a no cruzarte en sus caminos, te dejarán tranquilo.']
    },
    {
      nombre: "Trepacadáveres",
      src: "../assets/media/personajes/trepacadaveres.webp",
      width: 160,
      vida: [18],
      recompensa: [10],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Bestia parasitaria que controla el cuerpo de su huésped incluso después de la muerte de este último.', 'Las bestias de estos lugares han encontrado bastantes escondites ingeniosos, ¡pero ninguno tan inteligente como el cuerpo de otra criatura! Si te cruzas con un bicho así, ¡disfruta! ¡Habrás cazado dos criaturas a la vez!']
    },
    {
      nombre: "Necrocría",
      src: "../assets/media/personajes/necrocria.webp",
      width: 90,
      vida: [15],
      recompensa: ['-'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Bebé de Nido Profundo. Se escabulle por la oscuridad, aprendiéndose la distribución de su hogar.', 'Nido Profundo es un lugar peligroso para cazar, pero gratificante. Mantente alerta por si ves criaturas débiles que puedas comerte. Tienes que mantener la fuerza en la oscuridad.']
    },
    {
      nombre: "Necrocazador",
      src: "../assets/media/personajes/necrocazador.webp",
      width: 90,
      vida: [18],
      recompensa: [7],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Se arrastra por paredes y techos y escupe veneno ardiente a todo el que pase por allí.', 'Puede ser difícil de detectar, ya que se funden con la oscuridad y surgen de ella de repente. Busca sus ojos brillantes.']
    },
    {
      nombre: "Minitejedora",
      src: "../assets/media/personajes/minitejedora.webp",
      width: 190,
      vida: [30],
      recompensa: [17],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Ágil araña que cruza sus dominios usando finos hilos de tela. Espera pacientemente para tender emboscadas.', '¡Puede aparecer en cualquier momento de entre las sombras! Parece que vuelan por el aire mientras se mueven por hilos invisibles para acechar a sus presas sin hacer ruido.	']
    },
    {
      nombre: "Devoto Acechador",
      src: "../assets/media/personajes/devoto-acechador.webp",
      width: 240,
      vida: [100],
      recompensa: [43],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Adoradores de Herrah, la Bestia. Se protegen con antegarras reforzadas y, luego, atacan súbitamente a su presa para acabar con ella.', 'Poderosos, fuertemente blindados y rápidos, no son meras bestias. Estudia sus movimientos y busca detenidamente una apertura.']
    },
    {
      nombre: "Nosk",
      src: "../assets/media/personajes/nosk.webp",
      width: 240,
      vida: [680],
      recompensa: ['Mineral Pálido'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Adopta la forma de otras criaturas para atraer presas a su guarida.', 'En la oscuridad más profunda hay bestias con rostros robados de tu memoria que tratan de controlarte manipulando tus sentimientos. Conócete a ti mismo y no te dejes engañar.']
    },
    {
      nombre: "Trepasombras",
      src: "../assets/media/personajes/trepasombras.webp",
      width: 100,
      vida: [20],
      recompensa: [2],
      ubicacion: ['Cuenca Antigua'],
      descripcion: ['Solo se encuentra en lugares profundos y oscuros. Nunca se les ha visto comer ni beber nada.', 'Este pequeño bicho es débil y no supone ninguna amenaza, pero tiene algo que me inquieta. La forma en que se mueve y los sonidos que emite son... extraños por algún motivo.']
    },
    {
      nombre: "Mawlek Inferior",
      src: "../assets/media/personajes/mawlek-inferior.webp",
      width: 120,
      vida: [60],
      recompensa: [18],
      ubicacion: ['Cuenca Antigua', 'Coliseo de los Insensatos'],
      descripcion: ['Ataca escupiendo ácido y cortando con sus antegarras.', 'Si tratas de mantener la distancia, escupirá pegotes ardientes y pegajosos de repugnantes jugos estomacales. Acércate rápidamente y ataca con determinación.']
    },
    {
      nombre: "Mawlurk",
      src: "../assets/media/personajes/mawlurk.webp",
      width: 180,
      vida: [100],
      recompensa: [10],
      ubicacion: ['Cuenca Antigua'],
      descripcion: ['Criatura grande e inmóvil. Escupe veneno de forma salvaje cuando algún intruso pasa a su lado.', '¡¿Cómo habrán perdido las patas estas insensatas criaturas?! Supongo que es posible perderlo todo si de verdad te esfuerzas.']
    },
    {
      nombre: "Mawlek Incubador",
      src: "../assets/media/personajes/mawlek-incubador.webp",
      width: 240,
      vida: [300],
      recompensa: ['Fragmento de Máscara'],
      ubicacion: ['Cruces Olvidados', 'Coliseo de los Insensatos', 'Hogar de Dioses'],
      descripcion: ['Una criatura feroz, aunque extremadamente social. Se vuelve agresiva si no puede relacionarse con los de su propia especie.', 'Escucho a esta bestia gritar a veces mientras merodeo las cavernas, aunque nunca he posado mis ojos en ella. ¿A quién o qué está llamando? Por lo que yo sé, sus bramidos nunca obtienen respuesta.']
    },
    {
      nombre: "Germen de Luz",
      src: "../assets/media/personajes/germen-de-luz.webp",
      width: 60,
      vida: [1],
      recompensa: ['-'],
      ubicacion: ['Cuenca Antigua', 'Cruces Infectados'],
      descripcion: ['Un organismo unicelular completamente infectado. Se escabulle de un lado a otro con una mente simple.', 'Se ha estado filtrando un extraño aire de arriba durante años. Parte de ese aire se convirtió en líquido y parte de ese líquido, en carne, y parte de esa carne cobró vida. No sé qué pensar sobre ello.']
    },
    {
      nombre: "Globo Infectado",
      src: "../assets/media/personajes/globo-infectado.webp",
      width: 70,
      vida: [15],
      recompensa: ['-'],
      ubicacion: ['Cuenca Antigua'],
      descripcion: ['Célula unica de infección. Posee una mente primitiva y puede flotar gracias a sus gases internos.', 'La infección que recorre las venas muertas del reino... ¿es capaz de pensar? ¿Está dotada de alma? ¿Acaso está viva?']
    },
    {
      nombre: "Reseptaculo Roto",
      src: "../assets/media/personajes/reseptaculo-roto.webp",
      width: 180,
      vida: [525],
      recompensa: ['Alas de Monarca'],
      ubicacion: ['Cuenca Antigua', 'Hogar de Dioses'],
      descripcion: ['Cadáver destrozado, reanimado por parásitos infectados.', 'La forma de esta criatura... He visto algo similar antes. Más de una vez, incluso. Se parece un poco a los insectos de Hallownest, pero no es exactamente igual. ¿De dónde han venido estos pequeños errantes vacíos?']
    },
    {
      nombre: "Bubélula",
      src: "../assets/media/personajes/bubelula.webp",
      width: 200,
      vida: [30],
      recompensa: [8],
      ubicacion: ['Límite del Reino'],
      descripcion: ['Criatura grande y dócil que revolotea pacíficamente por las cavernas del Límite del Reino.', 'Es demasiado lento para huir de ti y demasiado grande para ocultarse. Esta presa no supondrá ningún reto, pero a veces no está mal tomarse las cosas con más tranquilidad.']
    },
    {
      nombre: "Aspid Primigenio",
      src: "../assets/media/personajes/aspid-primigenio.webp",
      width: 100,
      vida: [35],
      recompensa: [6],
      ubicacion: ['Límite del Reino', 'Coliseo de los Insensatos'],
      descripcion: ['Una forma más salvaje y ancestral del aspid. Se pensaba que se habían extinguido, pero han reaparecido en los límites del mundo.', 'Estos crueles enemigos te emboscarán y atacarán incansablemente con su veneno abrasador. Qué raro que sus descendientes sean tan débiles. Si tengo hijos, espero que sean más fuertes que yo...']
    },
    {
      nombre: "Saltamontes",
      src: "../assets/media/personajes/saltamontes.webp",
      width: 80,
      vida: [50],
      recompensa: [16],
      ubicacion: ['Límite del Reino'],
      descripcion: ['Se abalanza sobre su presa y usa su afilada trompa para drenar fluidos vitales.', 'La barriga de este ladrón saltarín está llena de la sangre que ha robado a otras bestias. Si lo pones sobre el fuego, la barriga crecerá y crecerá hasta que explote y de lugar a una lluvia humeante de fluidos.']
    },
    {
      nombre: "Gran Saltamontes",
      src: "../assets/media/personajes/gran-saltamontes.webp",
      width: 120,
      vida: [120],
      recompensa: [30],
      ubicacion: ['Límite del Reino', 'Coliseo de los Insensatos'],
      descripcion: ['Salta por los límites del mundo tratando de aplastar a su presa con su cuerpo.', 'Un enemigo digno, sorprendentemente ágil para su tamaño. Mantén la distancia o trata de bailar entre sus saltos y golpear sus patas.']
    },
    {
      nombre: "Mímico Larva",
      src: "../assets/media/personajes/mimico-larva.webp",
      width: 140,
      vida: [45],
      recompensa: ['-'],
      ubicacion: ['Nido Profundo', 'Cumbre de Cristal', 'Coliseo de los Insensatos'],
      descripcion: ['Asume la forma de una criatura inofensiva para atraer a su presa.', 'Atraer a un enemigo fingiendo ser una pequeña y débil larva. ¡Muy astuto! Por desgracia para ellos, me como estas larvas en cuanto las veo.']
    },
    {
      nombre: "Cría de la Colmena",
      src: "../assets/media/personajes/cria-de-la-colmena.webp",
      width: 80,
      vida: [18],
      recompensa: ['-'],
      ubicacion: ['Limite del Reino', 'La Colmena'],
      descripcion: ['Los habitantes más pequeños de la Colmena. Realiza tareas simples.', 'Débiles, pero trabajadores y numerosos. Sus cuerpos pequeños y peludos están rellenos de un líquido dorado, dulce y grueso. Viene bien llevar unos cuantos encima durante cacerías largas.']
    },
    {
      nombre: "Soldado de la Colmena",
      src: "../assets/media/personajes/soldado-de-la-colmena.webp",
      width: 160,
      vida: [51],
      recompensa: [15],
      ubicacion: ['La Colmena'],
      descripcion: ['Defiende la Colmena contra intrusos con su aguijón extensible.', 'Guerreros salvajes y determinados. Tendrás que estar preparado para luchar hasta la muerte con ellos si planeas invadir su hogar.']
    },
    {
      nombre: "Guardián de la Colmena",
      src: "../assets/media/personajes/guardian-de-la-colmena.webp",
      width: 200,
      vida: [80],
      recompensa: [25],
      ubicacion: ['La Colmena'],
      descripcion: ['Protege la Colmena embistiendo a los intrusos con su enorme cuerpo.', 'Como su pariente más pequeño, su único instinto es proteger la Colmena a cualquier coste para sí mismos. Son algo torpes y normalmente dañarán la estructura de la Colmena al cargar contra los intrusos. ¿Les traerá esto deshonra? No sé si tienen la capacidad de sentir algo así.']
    },
    {
      nombre: "Cáscara de Colmena",
      src: "../assets/media/personajes/cascara-de-colmena.webp",
      width: 180,
      vida: [30],
      recompensa: [16],
      ubicacion: ['La Colmena'],
      descripcion: ['Cáscara cobarde, cuyo cuerpo ha sido colonizado por las crías de la colmena.', 'Las crías han formado su nido en torno a este pobre insecto o fue este último quien metió su cuerpo en el nido? En cualquier caso, parecen bastante felices juntos.']
    },
    {
      nombre: "Caballero Colmena",
      src: "../assets/media/personajes/caballero-colmena.webp",
      width: 240,
      vida: [800],
      recompensa: ['Sangrecolmena'],
      ubicacion: ['La Colmena'],
      descripcion: ['Protector leal de la Reina de la Colmena. No puede volar pero es feroz en combate.', 'Algunas criaturas nacen con deberes y lealtadas marcadas imborrablemente en sus mentes. Son fuertes, pero también son esclavos.']
    },
    {
      nombre: "Cáscara Espinosa",
      src: "../assets/media/personajes/cascara-espinosa.webp",
      width: 110,
      vida: [40],
      recompensa: [12],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Desbordado por vegetación, ataca disparando afiladas espinas desde su cuerpo.', 'Las espinas que dispara parecen ser ligeramente venenosas. ¡No las uses para mondarte los colmillos después de comer!']
    },
    {
      nombre: "Loodle",
      src: "../assets/media/personajes/loodle.webp",
      width: 90,
      vida: [30],
      recompensa: [3],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Habita en las tierras salvajes junto a los Jardines de la Reina. Su naturaleza no es agresiva, pero sus continuos rebotes pueden ser peligrosos.', '¡Parecen tener una energía ilimitada! ¿Alguna vez se detienen a dormir, a comer o a amar?']
    },
    {
      nombre: "Petramantis",
      src: "../assets/media/personajes/petramantis.webp",
      width: 180,
      vida: [40],
      recompensa: [12],
      ubicacion: ['Jardines de la Reina', 'Coliseo de los Insensatos'],
      descripcion: ['Acecha entre el follaje y ataca lanzando viento con forma de guadaña a distancia.', 'Te atacarán desde lejos, así que acércate a ellos y golpea rápidamente. Sus cuerpos son frágiles y caerán rápidamente ante tu aguijón.']
    },
    {
      nombre: "Traidor Mantis",
      src: "../assets/media/personajes/traidor-mantis.webp",
      width: 140,
      vida: [70],
      recompensa: [21],
      ubicacion: ['Jardines de la Reina', 'Coliseo de los Insensatos'],
      descripcion: ['Antiguo miembro de la tribu mantis, ahora exiliado y alocado por la infección.', 'Pertenecer a una tribu o no pertenecer. La verdad es que no entiendo cuál es la diferencia, ni cómo funciona. Yo no tengo tribu.']
    },
    {
      nombre: "Señor Desleal",
      src: "../assets/media/personajes/señor-desleal.webp",
      width: 180,
      vida: [800],
      recompensa: ['Acceso a la Dama Blanca'],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Cacique destituido de la tribu mantis. Decidió aceptar la infección y se volvió contra sus hermanas.', 'Yo también he sentido esa tentación. La tentación de dejar que la infección entre en mí. Sería más fuerte, más poderoso... esas ideas siguen emponzoñando mis sueños durante los momentos difíciles. Es una mentira, pero brilla tanto que puede confundir tu mente.']
    },
    {
      nombre: "Baldur Espinado",
      src: "../assets/media/personajes/baldur-espinado.webp",
      width: 100,
      vida: [65],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un baldur fortalecido, criado para combatir en el Coliseo de los Insensatos. Es más resistente y agresivo que su antecesor salvaje.', 'Estas criaturas... Nunca he visto a una que haya alcanzado la madurez. Supongo que no se les permite vivir tanto.']
    },
    {
      nombre: "Mosquito Blindado",
      src: "../assets/media/personajes/mosquito-blindado.webp",
      width: 100,
      vida: [40],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un mosquito fortalecido, criado para combatir en el Coliseo de los Insensatos. Es más resistente y agresivo que su antecesor salvaje.', '¡Rápido y fuerte! ¡Cuando cojan impulso, prepárate para contraatacar o quítate de en medio!']
    },
    {
      nombre: "Obble de Guerra",
      src: "../assets/media/personajes/obble-de-guerra.webp",
      width: 80,
      vida: [70],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Se crió en el Coliseo. Aunque ha recibido entrenamiento para el combate, sus movimientos y sus ataques son algo torpes.', '¡Le han hecho una pequeña máscara! Me pregunto si vale para algo...']
    },
    {
      nombre: "Oblobble",
      src: "../assets/media/personajes/oblobble.webp",
      width: 220,
      vida: [260],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Primo mayor del obble. Conserva a su pareja de por vida, y jamás la abandona.', 'Tener una pareja a tu lado... alguien que no te dejará hasta su muerte. Curioso. Nunca ha encontrado a nadie que quiera permanecer a mi lado...']
    },
    {
      nombre: "Insensato Escudado",
      src: "../assets/media/personajes/insensato-escudado.webp",
      width: 150,
      vida: [65],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Se acerca cuidadosamente a sus rivales manteniendo su caparazón en alto.', 'Este «Coliseo» es un lugar extraño en el que algunos insectos luchan a muerte mientras otros les observan. No entiendo estos extraños rituales. Si decides entrar, procura mantenerte en guardia.']
    },
    {
      nombre: "Insensato Fornido",
      src: "../assets/media/personajes/insensato-fornido.webp",
      width: 180,
      vida: [80],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Usa hojas con forma de luna creciente para acabar con sus rivales.', '¡Puedes golpear sus armas giratorias cuando estén en el aire para volverlas en su contra! Esto puede resultarte útil si te acorrala.']
    },
    {
      nombre: "Insensato Alado",
      src: "../assets/media/personajes/insensato-alado.webp",
      width: 160,
      vida: [70],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Se aleja volando del alcance de su oponente y luego se lanza hacia él para darle un golpe mortal.', '¿Los luchadores que combaten en el Coliseo esperan conseguir algo? ¿Son esclavos, prisioneros o simplemente decidieron que querían luchar?']
    },
    {
      nombre: "Insensato Pesado",
      src: "../assets/media/personajes/insensato-pesado.webp",
      width: 180,
      vida: [90],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Carga lleno de furia contra los enemigos.', 'Grande y corpulento, lucha para conservar la vida. ¡No subestimes a este luchador! Puede moverse rápidamente a pesar de su tamaño. Además, detrás de esa máscara se oculta un rostro sorprendentemente hermoso.']
    },
    {
      nombre: "Loodle Letal",
      src: "../assets/media/personajes/loodle-letal.webp",
      width: 120,
      vida: [45],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Loodle equipado con un yelmo y entrenado para matar.', 'Parecen muy fieros, pero tienen problemas a la hora de dirigir sus ataques. Observa atentamente sus movimientos y ataca en el momento adecuado. Llévate su yelmo como trofeo.']
    },
    {
      nombre: "Tuercerayos",
      src: "../assets/media/personajes/tuercerayos.webp",
      width: 190,
      vida: [80],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Insecto erudito que ha convertido las enseñanzas del Santuario de Almas en una técnica de combate letal. Ataca lanzando descargas eléctricas.', 'Al parecer, solo se alimenta de lumélulas y pasa toda su vida luchando en la arena o meditando en solitario. Un enemigo peculiar.']
    },
    {
      nombre: "Domador de Dioses",
      src: "../assets/media/personajes/domador-de-dioses.webp",
      width: 220,
      vida: [1100],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Una guerrera veterana del Coliseo de los Insensatos. Lucha junto a las criaturas que ha entrenado.', 'Algunos cazadores entrenan a bestias para que les acompañen cuando van tras sus presas. Una vez lo intenté, pero no pude resistir la tentación de comparar la fuerza de mi compañero con la mía.']
    },
    {
      nombre: "Acechador Pálido",
      src: "../assets/media/personajes/acechador-palido.webp",
      width: 120,
      vida: [200],
      recompensa: ['Llave Simple', 'Acceso a Ídolo del Rey'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Campeón olvidado de el Coliseo, alejado por obsesiones extrañas.', 'Esta extraña criatura no es afectada ni es consciente de la enfermedad que hay a la deriva por las cavernas. Su locura es solo suya.']
    },
    {
      nombre: "Zote",
      src: "../assets/media/personajes/zote.webp",
      width: 90,
      vida: [200],
      recompensa: ['Recompensas de la Prueba del Guerrero'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Se ha autoproclamado caballero. Carece de prestigio. Blande un aguijón hecho de maderarmazón al que llama «Terminavidas».', 'Existen ciertas criaturas que son tan débiles, inútiles, ineptas e irritantes que cazarlas pierde todo el interés.']
    },
    {
      nombre: "Príncipe Gris Zote",
      src: "../assets/media/personajes/principe-gris-zote.webp",
      width: 240,
      vida: ['1200 / 1500'],
      recompensa: ['300 de Esencia'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. Falto de gracia pero se vuelve más fuerte con cada derrota.', 'Amor mío, cualquier criatura que pueda mantenerse lejos de tí, que voluntariamente te deje atrás o te diga cosas desagradables... ¡Bah! ¡Pobres gusanos, no merecen ni quedarse bajo tu gloriosa sombra!']
    },
    {
      nombre: "Zotito Alado",
      src: "../assets/media/personajes/zotito-alado.webp",
      width: 160,
      vida: [20],
      recompensa: ['-'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. Asiste a su maestro a regañadientes volando perezosamente hacia los enemigos.', '"Ella preguntó si le había comprado el Amuleto, como había prometido, pero entonces él lo explicó. El amuleto era realmente de baja calidad y no merecía la pena por aquel precio.Ella entendió la sabiduría de su decisión perfectamente."']
    },
    {
      nombre: "Zotito Saltarín",
      src: "../assets/media/personajes/zotito-saltarin.webp",
      width: 160,
      vida: [20],
      recompensa: ['-'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. Salta de una manera poco amenazante.', '《¿La humilde esposa del cartógrafo? ¡Hah! Mi reina; ¿cómo puedes compararte con ella? ¡En la cara de tu belleza intoxicante las demás hembras son solamente polvo!》']
    },
    {
      nombre: "Zotito Volátil",
      src: "../assets/media/personajes/zotito-volatil.webp",
      width: 180,
      vida: [30],
      recompensa: ['-'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. No soporta la presión de existir y explota rápidamente.', '"El Príncipe Gris era errante por naturaleza, pero ella no podía soportar el separarse de él. Por lo que él ideó un plan para estar seguro de que ella y su príncipe estarían juntos por siempre. Ella solo tenía que esperar su oportunidad."']
    },
    {
      nombre: "Xero",
      src: "../assets/media/personajes/xero.webp",
      width: 220,
      vida: [200],
      recompensa: ['100 de Esencia'],
      ubicacion: ['Tierras de Reposo'],
      descripcion: ['Sueño persistente de un guerrero caído. Ejecutado por crímenes contra el rey.', 'Una vida definida por la tragedia y el triunfo. Una muerte enturbiada por la pena y los remordimientos. Un espíritu atosigado por pecados y recuerdos. Mejor deambular por el mundo que ser maldecido con la gloria.']
    },
    {
      nombre: "Gorb",
      src: "../assets/media/personajes/gorb.webp",
      width: 180,
      vida: [200],
      recompensa: ['100 de Esencia'],
      ubicacion: ['Acantilados Aulladores'],
      descripcion: ['Sueño persistente de un guerrero caído. Una misteriosa forma de vida que afirmaba contener todo el conocimiento del mundo dentro de su dilatado cerebro.', '¡Soy Gorb!']
    },
    {
      nombre: "Anciano Hu",
      src: "../assets/media/personajes/anciano-hu.webp",
      width: 170,
      vida: [250],
      recompensa: ['100 de Esencia'],
      ubicacion: ['Páramos Fungicos'],
      descripcion: ['Sueño persistente de un guerrero caído. Viajó por el mundo cuidando de los aquejados por la plaga.', 'Nunca olvides lo que una vez se perdió, pero tampoco dejes que te ate.']
    },
    {
      nombre: "Marmu",
      src: "../assets/media/personajes/marmu.webp",
      width: 180,
      vida: [200],
      recompensa: ['150 de Esencia'],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Sueño persistente de un guerrero caído. Protector de los Jardines de la Reina.', 'Si crees en algo lo máximo que puedas, con los ojos completamente cerrados... ¡se terminará haciendo realidad!']
    },
    {
      nombre: "Sin Ojos",
      src: "../assets/media/personajes/sin-ojos.webp",
      width: 200,
      vida: [200],
      recompensa: ['200 de Esencia'],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Sueño persistente de un guerrero caído. Desapareció durante la plaga.', 'Se están acercando... Lo que tienes en tu interior... ¡Sácalo!']
    },
    {
      nombre: "Galien",
      src: "../assets/media/personajes/galien.webp",
      width: 180,
      vida: [230],
      recompensa: ['200 de Esencia'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Sueño persistente de un guerrero caído. Entrenado en las tierras salvajes que bordean el reino con la esperanza de convertirse en un caballero.', 'Un caballero no solo se esfuerza en proteger las tierras y a su gente, sino también las esperanzas y los sueños del reino.']
    },
    {
      nombre: "Markoth",
      src: "../assets/media/personajes/markoth.webp",
      width: 210,
      vida: [250],
      recompensa: ['250 de Esencia'],
      ubicacion: ['Límite del Reino'],
      descripcion: ['Sueño persistente de un guerrero caído. El único miembro de su tribu olvidada que empuñó un arma.', 'Que tus esfuerzos te lleven a algún lugar digno.']
    },
    {
      nombre: "Grimario Novato",
      src: "../assets/media/personajes/grimario-novato.webp",
      width: 130,
      vida: [50],
      recompensa: ['Llama para Niño de Grimm'],
      ubicacion: ['Sendero Verde', 'Cumbre de Cristal', 'Ciudad de Lágrimas'],
      descripcion: ['Joven y juguetón espíritu de la compañía de Grimm. Como parte del Ritual, recoge la llama escarlata en su linterna. Renunciará a la llama cuando sea derrotado.', 'Las sombras sueñan con fuego eterno. Llamas devoran ascuas en su descenso.  Uno encenderá la Luz del Horror. Llama y sirve en la Tropa del Terror']
    },
    {
      nombre: "Grimario Maestro",
      src: "../assets/media/personajes/grimario-maestro.webp",
      width: 170,
      vida: [75],
      recompensa: ['Llama para Niño de Grimm'],
      ubicacion: ['Paso del Rey', 'Tierras de Reposo', 'Límite del Reino'],
      descripcion: ['Poderoso y devoto espíritu de la compañía de Grimm. Como parte del Ritual, recoge llama escarlata con su linterna. Renunciará a la llama cuando sea derrotado.', 'Sueño oscuro, luces rojas, chispas danzan. La pesadilla escarlata, el salvaje brillo. las visiones bailan y las llamas hablan. Quema al padre alimenta al niño']
    },
    {
      nombre: "Grimario Pesadilla",
      src: "../assets/media/personajes/grimario-pesadilla.webp",
      width: 170,
      vida: [100],
      recompensa: ['Llama para Niño de Grimm'],
      ubicacion: ['La Colmena', 'Núcleo Fúngico', 'Cuenca Antigua'],
      descripcion: ['Espíritu de una pesadilla terrorífica de la compañía de Grimm. Como parte del Ritual, recoge llama escarlata con su linterna. Renunciará a la llama cuando sea derrotado.', 'Baila y muere y vive eternamente. Gritan y cantan voces silenciosas. Frente al oscuro corazón latente. El Rey Pesadilla arde entre brasas']
    },
    {
      nombre: "Grimm",
      src: "../assets/media/personajes/grimm.webp",
      width: 140,
      vida: [800],
      recompensa: ['Muesca de Amuletos', 'Niño de Grimm Nivel 3'],
      ubicacion: ['Bocasucia', 'Hogar de Dioses'],
      descripcion: ['Maestro de la Compañía de Grimm', 'Por la llamada de la linterna, a través de sueños yo viajo. A consumir las llamas de un reino hecho pedazos.']
    },
    {
      nombre: "Rey Pesadilla",
      src: "../assets/media/personajes/rey-pesadilla.webp",
      width: 200,
      vida: [1500],
      recompensa: ['Niño de Grimm Nivel 4'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Espectro retorcido de la llama escarlata.', 'La expansión del sueño separada en el pasado, y un reino deberá estar alejado. El rojo latente, los extremos más apagados. El corazón de la pesadilla. El sueño aterrorizado.']
    },
    {
      nombre: "Maestros de Aguijón Oro y Mato",
      src: "../assets/media/personajes/maestros-de-aguijon-oro-y-mato.webp",
      width: 240,
      vida: [2100],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Hermanos del aguijón, entrenados en combate por el gran Sabio del aguijón.', '"Dioses por trabajo y aguijón vinculados. Hermanos que al débil protejen bajo juramento. Maestros de terrenos sagrados. ¡Ayúdanos a encontrar a un Dios en nuestro intento!"']
    },
    {
      nombre: "Maestro de Pinturas Sheo",
      src: "../assets/media/personajes/maestro-de-pinturas-sheo.webp",
      width: 160,
      vida: [950],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Habilidoso y respetado maestro del aguijón. Siempre entusiasmado por aprender cosas nuevas.', '"¡Oh Dios inspirado, maestro de las artes.  Cuyos trabajos deben perdurar en el futuro. Mira más allá de nuestros corazones y mentes. Revélanos el dios más puro!" ']
    },
    {
      nombre: "Gran Sabio del Aguijón Sly",
      src: "../assets/media/personajes/gran-sabio-del-aguijon-sly.webp",
      width: 150,
      vida: [1050],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Legendario sabio de las artes del aguijón y recientemente; mercader con algo de éxito', '"¡Sabio Dios del astuto y el audaz. Afila nuestros aguijones y las probabilidades muéstranos. Oh gran maestro, déjanos observar. A aquel aun mas grande, al más poderoso Dios!"']
    },
    {
      nombre: "Carcasa Alada",
      src: "../assets/media/personajes/carcasa-alada.webp",
      width: 80,
      vida: [999],
      recompensa: ['-'],
      ubicacion: ['Palacio Blanco'],
      descripcion: ['Un ser artificial con alas que guarda un líquido oscuro dentro de su coraza blanca.', 'Los insectos de Hallownest creen que su Rey creó este mundo y todo lo que contiene. ¿Con qué propósito, me pregunto? ¿Sus súbditos eran sus compañeros, sus juguetes, sus hijos...? Es imposible descifrar una mente como la suya.']
    },
    {
      nombre: "Criado Real",
      src: "../assets/media/personajes/criado-real.webp",
      width: 80,
      vida: [5],
      recompensa: ['-'],
      ubicacion: ['Palacio Blanco'],
      descripcion: ['Los sirvientes más leales y devotos del Rey.', 'Las criaturas simples y débiles forman colmenas y obedecen a un rey para volverse fuertes. Esas criaturas se convierten en las patas, garras y colmillos de su monarca.']
    },
    {
      nombre: "Carcasa Real",
      src: "../assets/media/personajes/carcasa-real.webp",
      width: 140,
      vida: [170],
      recompensa: ['-'],
      ubicacion: ['Palacio Blanco'],
      descripcion: ['Ser artificial, guardián del palacio de Hallownest y habilidoso portador de la garra hoz. Su pesada coraza blanca protege un cuerpo frágil.', 'Dicen que el antiguo rey murió hace mucho tiempo, pero su influencia aún perdura entre nosotros. Una criatura así... ¿qué deseaba?']
    },
    {
      nombre: "Hermano",
      src: "../assets/media/personajes/hermano.webp",
      width: 100,
      vida: [20],
      recompensa: ['-'],
      ubicacion: ['El Abismo'],
      descripcion: ['Fragmento de una voluntad que persiste.', 'Muy por debajo de nosotros, en las profundidades del reino, el aire cada vez se mueve menos y se instala una sensación de vacío. ¿Puede florecer la vida allí? Si es así, la cazaré.']
    },
    {
      nombre: "Tentáculos del Vacío",
      src: "../assets/media/personajes/tentaculos-del-vacio.webp",
      width: 260,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['El Abismo'],
      descripcion: ['Fragmentos del vacío convertidos en tentáculos afilados y lacerantes.', 'Los insectos de Hallownest solían preguntarse si había otros reinos más antiguos y extraños bajo ellos. Tenían ideas realmente extrañas. Tal vez por eso siempre andaban distraídos y era tan fácil matarlos.']
    },
    {
      nombre: "Hornet",
      src: "../assets/media/personajes/hornet.webp",
      width: 220,
      vida: [225],
      recompensa: ['Alas de Monarca'],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Habilidosa protectora de las ruinas de Hallownest. Empuña una aguja e hilo.', 'He visto a esta pequeña y ágil criatura. Pensé que era una presa y me abalancé sobre ella, pero, rápida como un rayo, me apuñaló con su aguijón volante y se fue disparada. ¿Podría ser... una cazadora?']
    },
    {
      nombre: "Hollow Knight",
      src: "../assets/media/personajes/hollow-knight.webp",
      width: 240,
      vida: [1000],
      recompensa: ['-'],
      ubicacion: ['Templo del Huevo Negro'],
      descripcion: ['Receptáculo adulto que encierra al corazón de la plaga en su cuerpo.', 'El antiguo Rey de Hallownest... llegó a tomar medidas desesperadas para salvar su pequeño mundo. Obligó a muchos a realizar tremendos sacrificios... y todo para nada.']
    },
    {
      nombre: "Vasija Pura",
      src: "../assets/media/personajes/vasija-pura.webp",
      width: 160,
      vida: [1600],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Vasija elegida, criada y entrenada para su forma primigenia.', '"¡El más profundo silencio en coraza sagrada, recibió el aguijón y fue nombrado caballero, vasija hechizada en un huevo, sellada. Escucha nuestra plegaria! ¡Tu Luz queremos ver revelada!"']
    },
    {
      nombre: "Destello",
      src: "../assets/media/personajes/destello.webp",
      width: 250,
      vida: [1700],
      recompensa: ['-'],
      ubicacion: ['-'],
      descripcion: ['La luz, olvidada hace mucho.', 'La plaga, la infección, la locura que reanima los cadáveres de Hallownest... el brillo que surge de los ojos de un reino muerto. ¿De dónde procede? Supongo que es algo que está más allá del entendimiento de mortales como yo.']
    },
    {
      nombre: "Sombra",
      src: "../assets/media/personajes/sombra.webp",
      width: 120,
      vida: ['-'],
      recompensa: ['Geo perdido en muerte reciente'],
      ubicacion: ['-'],
      descripcion: ['Eco de una vida anterior. Derrótala para obtener su poder y estar completo de nuevo.', 'Cada uno de nosotros deja una huella cuando muere. Un mancha en el mundo. No creo que este reino pueda soportar el peso de tantas vidas pasadas durante mucho más tiempo...']
    },
    {
      nombre: "Marca de Cazador",
      src: "../assets/media/personajes/marca-del-cazador.webp",
      width: 180,
      descripcion: ['La marca de un auténtico cazador.', 'No tengo descendencia, ni súbditos ni adoradores. Esta es la suma de mi ser, mis conocimientos, mis instintos... Tómalo, te pertenece. Buena suerte, cazador.']
    },
    {
      nombre: "Sello Vinculante",
      src: "../assets/media/personajes/sello-vinculante.webp",
      width: 140,
      ubicacion: ['Sendero del Dolor', 'Guarida de las Tejedoras', 'Templo del Huevo Negro'],
      descripcion: ['Sello intrincado con un diseño antiguo.', 'Usado para aprisionar una fuerza violenta, o proteger algo de gran importancia.']
    },
    {
      nombre: "Ídolo del Vacío",
      src: "../assets/media/personajes/idolo-del-vacio.webp",
      width: 140,
      ubicacion: ['Salón de los Dioses'],
      descripcion: ['Extraño artefacto procedente de un tiempo anterior a Hallownest, sus espiras gemelas adoptan una forma unificada. Contiene una gran cantidad de liquido del Abismo, perfectamente inmóvil.', '"Inspirados o locos, esos antiguos insectos. Eran devotos de ningún señor, o poder, o fuerza, sino de la mismísima oscuridad."']
    },
    {
      nombre: "Máscara Desgastada",
      src: "../assets/media/personajes/mascara-desgastada.webp",
      width: 160,
      ubicacion: ['Tierra de las Tormentas'],
      descripcion: ['Máscara extraña de una tierra sin dioses. Transmitida a lo largo de generaciones. El diseño sugiere que los pensamientos del portador se canalizaban a través del emblema.', '"Dioses del Trueno. Dioses de la Lluvia. ¿Por qué abandonáis a vuesos sirvientes? ¿Nuestras mentes serán abandonadas al sufrimiento, a sufrir a solas? ¿Qué dios queda para salvarnos de nuestra silenciosa armonía?"']
    }
  ];





  // todo -------------------------------------------------- PACIFICOS -------------------------------------------------- todo //
  public pacificos = [
    {
      nombre: "Reptacillo",
      src: "../assets/media/personajes/reptacillo.webp",
      width: 100,
      vida: [8],
      recompensa: [2],
      ubicacion: ['Paso del Rey', 'Cruces Olvidados', 'Sendero Verde', 'Acantilados Aulladores', 'Tierras de Reposo'],
      descripcion: ['Tímido carroñero que se arrastra por las cavernas buscando comida.', 'Aburrido y patético. Casi no merece la pena matarlo.']
    },
    {
      nombre: "Gruzzer",
      src: "../assets/media/personajes/gruzzer.webp",
      width: 80,
      vida: [8],
      recompensa: [2],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Criatura simplona que se mueve de un lado a otro anárquicamente, zumbando y golpeándose con cosas.', 'Solo parecen ser ligeramente conscientes de lo que les rodea, por lo que son presa fácil para poner a prueba tu aguijón. ¿Qué será lo que guía su camino? Parece como si buscaran formas de morir.']
    },
    {
      nombre: "Tiktik",
      src: "../assets/media/personajes/tiktik.webp",
      width: 100,
      vida: [8],
      recompensa: [2],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Acantilados Aulladores', 'Tierras de Reposo'],
      descripcion: ['Usa sus pequeñas y afiladas garras para trepar por paredes y techos.', 'Pasa el tiempo repiqueteando una y otra vez por los caminos y las cavernas cercanas a la superficie del reino. Si eres paciente, puedes esperar a que se acerque a ti y cogerlo.']
    },
    {
      nombre: "Goam",
      src: "../assets/media/personajes/goam.webp",
      width: 100,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['Cruces Olvidados', 'Páramos Fúngicos'],
      descripcion: ['Con su gruesa coraza, emerge del suelo para atrapar a su presa entre sus colmillos.', 'Estas bestias parecen ser inmunes a la mayoría de los daños, por lo que puedes afilar tus armas en su grueso pellejo o simplemente golpearlas para tu propia diversión. Apenas parecen notarlo.']
    },
    {
      nombre: "Gusano",
      src: "../assets/media/personajes/gusano.webp",
      width: 100,
      vida: [5],
      recompensa: [2],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Los miembros más débiles del reino de Hallownest. Se les solía menospreciar y obligar a hacer trabajos de baja categoría.', 'Estas indefensas criaturas, compuestas principalmente de grasa dulce, son unas provisiones excelentes para largos viajes. Están más buenos asados en una hoguera. Si tratan de negociar por sus vidas, ignóralos. No tienen nada que ofrecer.']
    },
    {
      nombre: "Insecto Reparador",
      src: "../assets/media/personajes/insecto-reparador.webp",
      width: 140,
      vida: [5],
      recompensa: ['-'],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Miembro de un huidizo gremio de insectos empecinado en el mantenimiento de las numerosas señales y postes de Hallownest.', 'Los insectos de Hallownest estaban obsesionados con construir cosas. Qué mentes más extrañas tenían.']
    },
    {
      nombre: "Germen de Vida",
      src: "../assets/media/personajes/germen-de-vida.webp",
      width: 60,
      vida: [1],
      recompensa: ['1 Máscara de Saviavida'],
      ubicacion: ['Paso del Rey', 'Montículo Ancestral', ' Nido Profundo', 'Cañón Nublado', 'Sendero Verde', 'Límite del Reino', 'Aldea Mantis'],
      descripcion: ['Pequeño y veloz germen relleno de saviavida, que se puede extraer y consumir para disfrutar de sus propiedades saludables.', 'El líquido brillante del interior de estos pequeñines es delicioso y, si lo bebes, hará que te sientas más fuerte. Me pregunto cómo sabrán mis propias entrañas... ¿sería una cosa horrorosa tratar de beber un poco de ellas?']
    },
    {
      nombre: "Trepamusgo",
      src: "../assets/media/personajes/trepamusgo.webp",
      width: 100,
      vida: [10],
      recompensa: [2],
      ubicacion: ['Sendero Verde', 'Jardines de la Reina'],
      descripcion: ['Debilucho que se cubre con hojas para parecer más grande. Se oculta entre los matorrales.', 'Solía pensar que estas cosas no eran más que plantas caminantes. Cuando descubrí que en realidad eran criaturas vivas, empecé a matarlas de inmediato. ¡Esa es la naturaleza de la caza!']
    },
    {
      nombre: "Musgolula",
      src: "../assets/media/personajes/musgolula.webp",
      width: 100,
      vida: [15],
      recompensa: [2],
      ubicacion: ['Cañón Nublado', 'Jardines de la Reina'],
      descripcion: ['Debilucho volador que se cubre con hojas para parecer más grande. Se oculta entre los matorrales y huye si se le acercan depredadores.', 'Pasa toda su vida escondiéndose o huyendo. Qué triste. ¿O quizás esta es la vida que han elegido y la disfrutan? Es una idea extraña, pero no imposible.']
    },
    {
      nombre: "Libemáscara",
      src: "../assets/media/personajes/libemascara.webp",
      width: 90,
      vida: [1],
      recompensa: ['-'],
      ubicacion: ['Sendero Verde', 'Jardines de la Reina'],
      descripcion: ['Criatura voladora inofensiva a la que le gustan los entornos tranquilos. Normalmente viajan en bandadas.', 'Todos están alertas ante el peligro y cuando uno escapa, el resto lo siguen. Me pregunto qué se siente al contar con la protección de una manada.']
    },
    {
      nombre: "Durandoo",
      src: "../assets/media/personajes/durandoo.webp",
      width: 150,
      vida: [30],
      recompensa: [6],
      ubicacion: ['Sendero Verde', 'Páramos Fúngicos'],
      descripcion: ['Simple criatura andante metida en una dura coraza. Se suele encontrar vadeando en estanques pocos profundos de agua ácida.', 'Una de las pocas criaturas que pueden sobrevivir en los ríos de abrasadora agua ácida que fluyen en torno a nosotros. ¿De dónde viene este agua? Burbujea y escupe con un furioso odio hacia los vivos...']
    },
    {
      nombre: "Duranda",
      src: "../assets/media/personajes/duranda.webp",
      width: 180,
      vida: [30],
      recompensa: [4],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Simple criatura voladora protegida por una coraza espinosa.', 'Cree estar completamente protegido y por ello no se preocupa por quienes pasan a su lado. Ataca su rostro y enséñale que de nada se está nunca a salvo.']
    },
    {
      nombre: "Aluba",
      src: "../assets/media/personajes/aluba.webp",
      width: 200,
      vida: [10],
      recompensa: ['-'],
      ubicacion: ['Sendero Verde', ' Jardines de la Reina'],
      descripcion: ['Un ser tranquilo que prefiere planear cerca de aguas corrosivas.', 'Qué vida más despreocupada llevan cuando flotan sobre nosotros. Pero si alguno se acerca demasiado al suelo...']
    },
    {
      nombre: "Luméula Eléctrica",
      src: "../assets/media/personajes/lumelula-electrica.webp",
      width: 180,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['Cañón Nublado', ' Sendero Verde'],
      descripcion: ['Cuando se sienten amenazadas se agrupan y emiten electricidad.', 'Normalmente vuelan pacíficamente, pero a veces se agrupan y emiten un relámpago brillante y chisporroteante capaz de aturdir y quemar incluso a grandes criaturas como yo. Busca un hueco por el que puedas pasar y deslízate rápidamente.']
    },
    {
      nombre: "Uoma",
      src: "../assets/media/personajes/uoma.webp",
      width: 100,
      vida: [1],
      recompensa: ['-'],
      ubicacion: ['Cañón Nublado', ' Archivos de la Maestra'],
      descripcion: ['La forma gelatinosa más pequeña. Es pasivo y no parecen darse cuenta de nada, pero desprende peligrosas cargas eléctricas.', '¿El espíritu de un ancestro muerto? ¿El cerebro de una criatura más grande, al que se le permite vagar libremente? ¿Un huevo en busca de un lugar seguro para eclosionar? No tengo ni idea de qué se trata.']
    },
    {
      nombre: "Ooma",
      src: "../assets/media/personajes/ooma.webp",
      width: 100,
      vida: [1],
      recompensa: [5],
      ubicacion: ['Cañón Nublado', ' Archivos de la Maestra'],
      descripcion: ['Su exterior pasivo protege un núcleo agresivo y explosivo.', 'Criatura espeluznante y horrible hecha de un líquido grueso. Puedes ver a través de ella, pero no dónde guarda sus pensamientos. No me fío de ella para nada. Mantente alejado.']
    },
    {
      nombre: "Ambloom",
      src: "../assets/media/personajes/ambloom.webp",
      width: 100,
      vida: [12],
      recompensa: [2],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Un hongo reptante y simplón. Su sombrero está cubierto de una capa de espinas endurecidas.', 'Túmbate boca abajo, abre el hocico y deja que este sabroso bocado se deslice directamente a tu estómago.']
    },
    {
      nombre: "Fungicría",
      src: "../assets/media/personajes/fungicria.webp",
      width: 100,
      vida: [10],
      recompensa: [2],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Globo fúngico pasivo. Sus gases internos hacen que flote.', 'No es más que una cría y se desplaza a la deriva con los ojos cerrados y una mente abierta. Cuando era joven, mis hermanos y hermanas y yo tratábamos de cazarnos los unos a los otros en el nido. Ahora cazo solo.']
    },
    {
      nombre: "Seticría",
      src: "../assets/media/personajes/seticria.webp",
      width: 60,
      vida: [3],
      recompensa: ['-'],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Joven criatura fúngica. Pasa la mayoría del tiempo en la tierra, pero puede arrancar sus raíces de ella y huir si se siente en peligro.', 'Parece una seta normal hasta que te acercas. Entonces salta del suelo y empieza a correr de un lado a otro sin ver nada. Es muy, muy divertido.']
    },
    {
      nombre: "Cáscara Cobarde",
      src: "../assets/media/personajes/cascara-cobarde.webp",
      width: 90,
      vida: [20],
      recompensa: [11],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Antiguo miembro de la alta sociedad de Hallownest. Aunque una fuerza en su interior hace que sea agresivo, sus antiguos instintos a veces le empujan a huir del peligro.', '¡La naturaleza temerosa y cobarde de estos insectos de Hallownest perdura incluso tras la muerte! Casi resulta vergonzoso perseguirlos y acabar con ellos.']
    },
    {
      nombre: "Restos Brillantes",
      src: "../assets/media/personajes/restos-brillantes.webp",
      width: 180,
      vida: [220],
      recompensa: [420],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Una carcasa corpulenta que lleva incrustado un metal resplandeciente. Conserva el instinto de acumular geo.', 'Hay muchas cosas hermosas en el mundo. Los reflejos de la luz en el agua, el sabor de la presa a la que acabas de matar, el llanto de una cría que llama a su madre... Pero nunca he entendido el deseo de acumular metales y piedras.']
    },
    {
      nombre: "Pilflip",
      src: "../assets/media/personajes/pilflip.webp",
      width: 140,
      vida: [30],
      recompensa: [5],
      ubicacion: ['Canales Reales'],
      descripcion: ['Extraña criatura que se adapta a los cambios de su entorno dándose la vuelta y utilizando las extremidades situadas al otro lado de su cuerpo.', 'La adaptabilidad es una importante habilidad de supervivencia. Si un problema parece insuperable, prueba a afrontarlo desde un ángulo distinto.']
    },
    {
      nombre: "Hwurmp",
      src: "../assets/media/personajes/hwurmp.webp",
      width: 200,
      vida: [25],
      recompensa: [5],
      ubicacion: ['Canales Reales'],
      descripcion: ['Diminuto y plácido, pero se hincha hasta adoptar un tamaño enorme cuando se siente amenazado.', 'Una criatura extremadamente divertida.']
    },
    {
      nombre: "Saco Viscoso",
      src: "../assets/media/personajes/saco-viscoso.webp",
      width: 120,
      vida: [20],
      recompensa: ['Huevo Podrido'],
      ubicacion: ['Cumbre de Cristal', 'Nido Profundo', 'Límite del Reino', 'Canales Reales', 'Jardines de la Reina'],
      descripcion: ['Una criatura tranquila, pero repugnante. Guarda huevos podridos en sus entrañas.', 'Resulta fácil de encontrar si se tiene sentido del olfato. Si encuentras uno de sus huevos, te recomiendo que no te lo comas.']
    },
    {
      nombre: "Fragmentita",
      src: "../assets/media/personajes/fragmentita.webp",
      width: 160,
      vida: [15],
      recompensa: [2],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Se alimenta de polvo de cristal y usa púas cristalizadas para protegerse del peligro.', 'Esta criatura no me parece especialmente resaltable ni interesante. Debería aprender a volar, a respirar fuego o a cantar de forma espeluznante. Cualquier cosa que justificara su existencia.']
    },
    {
      nombre: "Brillomo",
      src: "../assets/media/personajes/brillomo.webp",
      width: 200,
      vida: [35],
      recompensa: [6],
      ubicacion: ['Cruces Olvidados', 'Cumbre de Cristal'],
      descripcion: ['Criatura dura y lenta. Los cristales que crecen en su lomo le confieren una protección extra ante los enemigos aéreos.', 'De gran tamaño y bien protegido, aunque lento y dócil. Los insectos de Hallownest solían obligar a estas criaturas a tirar de sus carros y máquinas.']
    },
    {
      nombre: "Reptador de Cristal",
      src: "../assets/media/personajes/reptador-de-cristal.webp",
      width: 80,
      vida: [5],
      recompensa: [8],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Lanza rayos de luz abrasadores desde los cristales de su lomo mientras se arrastra, aunque no parece darse cuenta de ello.', 'Estas criaturas pueden parecer débiles, pero a veces surgen ardientes pilares de calor de los cristales que llevan en sus lomos. ¡Ten cuidado y mide bien tus golpes!']
    },
    {
      nombre: "Gruzzer Volátil",
      src: "../assets/media/personajes/gruzzer-volatil.webp",
      width: 100,
      vida: [40],
      recompensa: [15],
      ubicacion: ['Cruces Infectados', 'Coliseo de los Insensatos'],
      descripcion: ['Gruzzer hinchado por la infección y a punto de explotar.', 'Una horrible sustancia viscosa y gases nocivos han empezado a gotear desde arriba. ¿Existe una fuente de toda esta pestilencia? Si es así, yo no la he visto.']
    },
    {
      nombre: "Garpiés",
      src: "../assets/media/personajes/garpies.webp",
      width: 120,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['Nido Profundo', 'Coliseo de los Insensatos'],
      descripcion: ['Excavador gigante cubierto de un caparazón hecho de gruesas placas. Viaja de forma incansable por los túneles de Nido Profundo.', 'Son monstruosamente fuertes e inmunes a cualquier ataque sobre sus cuerpos fuertemente blindados. Por suerte, si te limitas a no cruzarte en sus caminos, te dejarán tranquilo.']
    },
    {
      nombre: "Trepasombras",
      src: "../assets/media/personajes/trepasombras.webp",
      width: 100,
      vida: [20],
      recompensa: [2],
      ubicacion: ['Cuenca Antigua'],
      descripcion: ['Solo se encuentra en lugares profundos y oscuros. Nunca se les ha visto comer ni beber nada.', 'Este pequeño bicho es débil y no supone ninguna amenaza, pero tiene algo que me inquieta. La forma en que se mueve y los sonidos que emite son... extraños por algún motivo.']
    },
    {
      nombre: "Germen de Luz",
      src: "../assets/media/personajes/germen-de-luz.webp",
      width: 60,
      vida: [1],
      recompensa: ['-'],
      ubicacion: ['Cuenca Antigua', 'Cruces Infectados'],
      descripcion: ['Un organismo unicelular completamente infectado. Se escabulle de un lado a otro con una mente simple.', 'Se ha estado filtrando un extraño aire de arriba durante años. Parte de ese aire se convirtió en líquido y parte de ese líquido, en carne, y parte de esa carne cobró vida. No sé qué pensar sobre ello.']
    },
    {
      nombre: "Bubélula",
      src: "../assets/media/personajes/bubelula.webp",
      width: 200,
      vida: [30],
      recompensa: [8],
      ubicacion: ['Límite del Reino'],
      descripcion: ['Criatura grande y dócil que revolotea pacíficamente por las cavernas del Límite del Reino.', 'Es demasiado lento para huir de ti y demasiado grande para ocultarse. Esta presa no supondrá ningún reto, pero a veces no está mal tomarse las cosas con más tranquilidad.']
    },
    {
      nombre: "Saltamontes",
      src: "../assets/media/personajes/saltamontes.webp",
      width: 80,
      vida: [50],
      recompensa: [16],
      ubicacion: ['Límite del Reino'],
      descripcion: ['Se abalanza sobre su presa y usa su afilada trompa para drenar fluidos vitales.', 'La barriga de este ladrón saltarín está llena de la sangre que ha robado a otras bestias. Si lo pones sobre el fuego, la barriga crecerá y crecerá hasta que explote y de lugar a una lluvia humeante de fluidos.']
    },
    {
      nombre: "Cría de la Colmena",
      src: "../assets/media/personajes/cria-de-la-colmena.webp",
      width: 80,
      vida: [18],
      recompensa: ['-'],
      ubicacion: ['Limite del Reino', 'La Colmena'],
      descripcion: ['Los habitantes más pequeños de la Colmena. Realiza tareas simples.', 'Débiles, pero trabajadores y numerosos. Sus cuerpos pequeños y peludos están rellenos de un líquido dorado, dulce y grueso. Viene bien llevar unos cuantos encima durante cacerías largas.']
    },
    {
      nombre: "Cáscara de Colmena",
      src: "../assets/media/personajes/cascara-de-colmena.webp",
      width: 180,
      vida: [30],
      recompensa: [16],
      ubicacion: ['La Colmena'],
      descripcion: ['Cáscara cobarde, cuyo cuerpo ha sido colonizado por las crías de la colmena.', 'Las crías han formado su nido en torno a este pobre insecto o fue este último quien metió su cuerpo en el nido? En cualquier caso, parecen bastante felices juntos.']
    },
    {
      nombre: "Obble de Guerra",
      src: "../assets/media/personajes/obble-de-guerra.webp",
      width: 80,
      vida: [70],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Se crió en el Coliseo. Aunque ha recibido entrenamiento para el combate, sus movimientos y sus ataques son algo torpes.', '¡Le han hecho una pequeña máscara! Me pregunto si vale para algo...']
    },
    {
      nombre: "Acechador Pálido",
      src: "../assets/media/personajes/acechador-palido.webp",
      width: 120,
      vida: [200],
      recompensa: ['Llave Simple', 'Acceso a Ídolo del Rey'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Campeón olvidado de el Coliseo, alejado por obsesiones extrañas.', 'Esta extraña criatura no es afectada ni es consciente de la enfermedad que hay a la deriva por las cavernas. Su locura es solo suya.']
    },
    {
      nombre: "Carcasa Alada",
      src: "../assets/media/personajes/carcasa-alada.webp",
      width: 80,
      vida: [999],
      recompensa: ['-'],
      ubicacion: ['Palacio Blanco'],
      descripcion: ['Un ser artificial con alas que guarda un líquido oscuro dentro de su coraza blanca.', 'Los insectos de Hallownest creen que su Rey creó este mundo y todo lo que contiene. ¿Con qué propósito, me pregunto? ¿Sus súbditos eran sus compañeros, sus juguetes, sus hijos...? Es imposible descifrar una mente como la suya.']
    },
    {
      nombre: "Criado Real",
      src: "../assets/media/personajes/criado-real.webp",
      width: 80,
      vida: [5],
      recompensa: ['-'],
      ubicacion: ['Palacio Blanco'],
      descripcion: ['Los sirvientes más leales y devotos del Rey.', 'Las criaturas simples y débiles forman colmenas y obedecen a un rey para volverse fuertes. Esas criaturas se convierten en las patas, garras y colmillos de su monarca.']
    }
  ];





  // todo -------------------------------------------------- AGRESIVOS -------------------------------------------------- todo //
  public agresivos = [
    {
      nombre: "Vengamosca",
      src: "../assets/media/personajes/vengamosca.webp",
      width: 140,
      vida: [8],
      recompensa: [3],
      ubicacion: ['Paso del Rey', 'Cruces Olvidados', 'Sendero Verde', 'Acantilados Aulladores', 'Tierras de Reposo'],
      descripcion: ['Depredador volador que persigue a su presa incansablemente.', 'Este pequeño cazador feroz perseguirá con valentía a criaturas mucho más grandes que él. ¡Admirable! Aunque es débil y he devorado a cientos de ellos con poco esfuerzo o preocupación.']
    },
    {
      nombre: "Rey Vengamosca",
      src: "../assets/media/personajes/rey-vengamosca.webp",
      width: 200,
      vida: [90],
      recompensa: [65],
      ubicacion: ['Sendero Verde', 'Coliseo de los Insensatos'],
      descripcion: ['El patriarca de la colonia de las vengamoscas. Se abalanza en picado sobre los intrusos y llama refuerzos si se ve amenazado.', 'Una asquerosa criatura a la que le gusta masticar cualquier porquería que encuentre tirada en el suelo de la caverna. Cuando se percata de una amenaza, emitirá molestos gritos y chillidos, así que mátalo rápido.']
    },
    {
      nombre: "Madre Gruz",
      src: "../assets/media/personajes/madre-gruz.webp",
      width: 200,
      vida: [90],
      recompensa: [50],
      ubicacion: ['Cruces Olvidados', 'Coliseo de los Insensatos'],
      descripcion: ['Gruzzer maduro que lleva a sus crías en la barriga. Ataca lanzándose con su enorme cuerpo.', 'Sorprendentemente, este monstruo no pone huevos, sino que lleva a sus crías dentro de su gordo estómago. Esta extraña práctica parece agotar a la criatura, que queda adormilada y vulnerable. ¡Aprovecha ese momento!']
    },
    {
      nombre: "Cazador Aspid",
      src: "../assets/media/personajes/cazador-aspid.webp",
      width: 100,
      vida: [15],
      recompensa: [6],
      ubicacion: ['Cruces Olvidados', 'Cuenca Antigua'],
      descripcion: ['Vence a su presa escupiendo líquido corrosivo. Suele cazar en grupo.', 'Depredadores inteligentes que tratarán de atacarte a distancia. No les des espacio, ¡carga contra ellos y córtalos por la mitad! Verás que no son tan inteligentes cuando están muertos.']
    },
    {
      nombre: "Madre Aspid",
      src: "../assets/media/personajes/madre-aspid.webp",
      width: 150,
      vida: [20],
      recompensa: [10],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Lleva los huevos de sus crías dentro de la barriga. Puede dar a luz a crías según lo necesite para ocuparse de los intrusos.', '¡Utiliza sin pudor a sus crías como un arma contra sus enemigos! Deplorable, sí, pero admiro su inventiva. Los buenos cazadores no siempre son buenos padres.']
    },
    {
      nombre: "Cría Aspid",
      src: "../assets/media/personajes/cria-aspid.webp",
      width: 60,
      vida: [5],
      recompensa: ['-'],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Recién nacidas, estos jóvenes aspid rodean a los intrusos de forma instintiva.', '¡Estas crías nacen con un instinto letal! Aunque solo son bebés y puedes destrozarlos con tu aguijón sin pensártelo dos veces. Simplemente, no dejes que te abrumen por sus números.']
    },
    {
      nombre: "Cáscara Errante",
      src: "../assets/media/personajes/cascara-errante.webp",
      width: 120,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Vaga por los caminos en los que solía vivir.', 'Estos insectos «civilizados» de Hallownest eran débiles en vida y ahora son igual de débiles muertos. ¡Devuélvelos a la tierra de la que nacieron!']
    },
    {
      nombre: "Cáscara Cabezacuerno",
      src: "../assets/media/personajes/cascara-cabezacuerno.webp",
      width: 100,
      vida: [20],
      recompensa: [4],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Usa su cuerno para atacar a cualquier criatura no infectada que encuentre.', 'Estos insectos dan una sensación de arrogancia, incluso después de morir. ¡Están demasiado orgullosos de sus largos cuernos! Disfruto rompiéndoselos.']
    },
    {
      nombre: "Cáscara Saltarina",
      src: "../assets/media/personajes/cascara-saltarina.webp",
      width: 80,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Saltará de forma instintiva sobre cualquier criatura no infectada que lo ataque.', 'Los insectos del antiguo Hallownest no cazaban su propia comida, sino que otros se la traían. Por eso eran tan débiles. ¡Por eso su reino se desmoronó y se desvaneció!']
    },
    {
      nombre: "Cáscara Matona",
      src: "../assets/media/personajes/cascara-matona.webp",
      width: 100,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Cruces Olvidados', 'Sendero Verde', 'Ciudad de Lágrimas'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Ataca de forma agresiva a cualquier criatura no infectada que encuentre.', 'Estos cadáveres andantes están llenos de una gruesa neblina naranja. Tiene un sabor empalagoso y enfermizo. Me parece repugnante. Tras matar a estas criaturas, te sugiero que no te las comas.']
    },
    {
      nombre: "Cáscara Guerrera",
      src: "../assets/media/personajes/cascara-guerrera.webp",
      width: 180,
      vida: [15],
      recompensa: [6],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Los restos de un insecto, reanimados por una extraña fuerza. Porta un aguijón y una coraza.', 'Estos insectos, ablandados por generaciones de lujo, carecen de garras, coraza propia y veneno. Los que desean protegerse a sí mismos se ven obligados a crear armas con piedras, menas o corazas.']
    },
    {
      nombre: "Cáscara Guardiana",
      src: "../assets/media/personajes/cascara-guardiana.webp",
      width: 260,
      vida: [70],
      recompensa: [45],
      ubicacion: ['Cruces Olvidados'],
      descripcion: ['Los restos de un gran guardián de los Cruces de Hallownest, reanimados por una extraña fuerza. Su instinto aún le impulsa a defender su puesto de los intrusos.', 'Estos insectos, más grandes y fuertes que sus hermanos, siguen viéndose obligados a robar sus armas de los restos de otras criaturas. No deambulan ni cazan, sino que permanecen en guardia para siempre y atacan a todo aquel que se acerque.']
    },
    {
      nombre: "Restos Sepultados",
      src: "../assets/media/personajes/restos-sepultados.webp",
      width: 240,
      vida: [45],
      recompensa: [15],
      ubicacion: ['Tierras de Reposo'],
      descripcion: ['Restos momificados, deformados y enloquecidos por la infección.', 'Dentro de estos cadáveres renqueantes brilla una luz que perfora las tinieblas. Una vez traté de ver qué había tras la luz... y descubrí algo que brillaba aún más. Algo terrible.']
    },
    {
      nombre: "Falso Caballero",
      src: "../assets/media/personajes/falso-caballero.webp",
      width: 260,
      vida: [355],
      recompensa: ['Emblema de la Ciudad', 200],
      ubicacion: ['Cruces Olvidados', 'Hogar de Dioses'],
      descripcion: ['Un gusano al que una fuerza extraña ha vuelto loco. Vive en una coraza blindada robada.', 'A las criaturas débiles les encanta robar la fuerza de los demás. Sus vidas son efímeras y están llenas de miedo, pero anhelan tener el poder para dominar a quienes los han dominado.']
    },
    {
      nombre: "Baldur",
      src: "../assets/media/personajes/baldur.webp",
      width: 100,
      vida: [15],
      recompensa: [4],
      ubicacion: ['Cruces Olvidados', 'Montículo Cristalizado', 'Acantilados Aulladores'],
      descripcion: ['Se hace una bola y se lanza contra los intrusos que se adentran en su territorio. Agresivo incluso siendo recién nacido.', 'A los jóvenes cazadores les encanta capturar a estas criaturas y practicar deporte con ellas. Te animo a que lo pruebes, si te pica el gusanillo.']
    },
    {
      nombre: "Baldur Anciano",
      src: "../assets/media/personajes/baldur-anciano.webp",
      width: 220,
      vida: [60],
      recompensa: [50],
      ubicacion: ['Cruces Olvidados', 'Acantilados Aulladores', 'Montículo Ancestral'],
      descripcion: ['Corpulento y cubierto de gruesas placas. Se retrae sobre sí mismo cuando se le ataca.', 'A medida que envejecen, estas criaturas se vuelven demasiado pesadas y toscas para rodar libremente. En vez de eso, se hacen una bola y se ocultan del mundo. ¿En qué pensarán allí, enrolladas sobre sí mismas? Más tiempo de paz y tranquilidad, quizás.']
    },
    {
      nombre: "Musgoso",
      src: "../assets/media/personajes/musgoso.webp",
      width: 140,
      vida: [15],
      recompensa: [3],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Insecto con forma de planta que carga cuando un enemigo se acerca.', 'A veces es difícil detectarlo entre el follaje. Cuando menos te lo esperas aparece a tu lado y carga contra ti. Ve con cuidado.']
    },
    {
      nombre: "Musgoso Volátil",
      src: "../assets/media/personajes/musgoso-volatil.webp",
      width: 140,
      vida: [15],
      recompensa: [5],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Insecto con forma de planta inflamado por la infección. Cuando siente una amenaza libera gas.', 'El gas que emiten sus brotes posee un aroma atrayente. ¡Pero si te acercas demasiado disolverá tu coraza y tu carne!']
    },
    {
      nombre: "Engulletontos",
      src: "../assets/media/personajes/engulletontos.webp",
      width: 120,
      vida: [16],
      recompensa: [9],
      ubicacion: ['Sendero Verde', 'Jardines de la Reina'],
      descripcion: ['Planta carnívora que ataca a cualquier criatura que se le acerque.', 'Tienes que ser un auténtico tonto para dejarte engañar por una planta.']
    },
    {
      nombre: "Mosquito",
      src: "../assets/media/personajes/mosquito.webp",
      width: 100,
      vida: [10],
      recompensa: [5],
      ubicacion: ['Sendero Verde', 'Montículo descuidado'],
      descripcion: ['Se lanza contra su presa con su trompa en forma de aguja.', 'Cuando te embistan, no te dejes llevar por el pánico. Mantente firme y golpéales cuando se acerquen.']
    },
    {
      nombre: "Obble",
      src: "../assets/media/personajes/obble.webp",
      width: 100,
      vida: [10],
      recompensa: [4],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Insecto gordo, lento y volador. Suele soltar un líquido ácido que guarda en su cuerpo rechoncho.', 'Se da cuenta de lo molesto que resulta? ¿Moviéndose de un lado a otro sin rumbo y derramando sus jugos nocivos allí por donde pasa? Si te topas con alguno, asegúrate de matarlo.']
    },
    {
      nombre: "Gulka",
      src: "../assets/media/personajes/gulka.webp",
      width: 140,
      vida: [10],
      recompensa: [6],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Un agresivo ser vegetal que se retrae de forma proactiva cuando siente peligro cerca. Escupe bolas duras y espinosas cuando sus enemigos se encuentran a distancia.', 'Sus hojas son secas y sosas. El capullo es desagradablemente agrio, pero ¡oh! El veneno de esas bolas que escupe... ¡Exquisito! Si te sobra tiempo, trata de beber un poco y disfrutar de sus efectos.']
    },
    {
      nombre: "Musgoagresor",
      src: "../assets/media/personajes/musgoagresor.webp",
      width: 200,
      vida: [15],
      recompensa: [8],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Tímida criatura que asusta a los intrusos cubriéndose con enormes trozos de musgo.', 'Es pequeño, pero saca mucho coraje y fortaleza una vez que se cubre de follaje. Y puedo comprender el deseo de camuflarse...']
    },
    {
      nombre: "Musgoagresor Gigante",
      src: "../assets/media/personajes/musgoagresor-gigante.webp",
      width: 250,
      vida: [100],
      recompensa: [120],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Una familia de criaturas que ha aprendido a fusionarse con musgo y forman un solo ser.', 'Es cierto, la unión hace la fuerza, pero estas criaturas nunca fueron demasiado fuertes de por sí. ¡Haz pedazos su artimaña!']
    },
    {
      nombre: "Musgocaballero",
      src: "../assets/media/personajes/musgocaballero.webp",
      width: 200,
      vida: [50],
      recompensa: [40],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Protector de Sendero Verde, adiestrado en las artes del aguijón y la coraza.', 'Se ocultan como montículos con forma de arbusto y parecen débiles, ¡pero ten cuidado con estos guerreros! Son incansables en combate y protegen con fiereza algo que se oculta en el Sendero Verde.']
    },
    {
      nombre: "Vagabundo Musgoso",
      src: "../assets/media/personajes/vagabundo-musgoso.webp",
      width: 180,
      vida: [25],
      recompensa: [8],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Vago y corpulento musgoso. Se deja influir con facilidad por los demás.', 'Lento, gordo y fácil de derrotar; características comunes en quienes se olvidan de su vocación y abandonan sus deberes.']
    },
    {
      nombre: "Uumuu",
      src: "../assets/media/personajes/uumuu.webp",
      width: 220,
      vida: [300],
      recompensa: ['-'],
      ubicacion: ['Archivos de la Maestra'],
      descripcion: ['Ser inteligente que protege la cámara interior de los Archivos de la Maestra.', 'El desfiladero de abajo, el que está repleto de neblina y chisporrotea con una energía extraña... un cazador puede perder todos sus sentidos allí abajo. Ten cuidado... allí acechan cosas extrañas y antinaturales.']
    },
    {
      nombre: "Funglobo",
      src: "../assets/media/personajes/funglobo.webp",
      width: 200,
      vida: [15],
      recompensa: [6],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Globo fúngico totalmente crecido. Escupe los gases internos que acumula a sus agresores.', '¡Parece una pelota! Creo que nunca he visto a una criatura más redonda que esta. No hay duda de que este mundo oculta algunas criaturas maravillosas. ¡Debo cazarlas a todas!']
    },
    {
      nombre: "Sporg",
      src: "../assets/media/personajes/sporg.webp",
      width: 100,
      vida: [25],
      recompensa: [3],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Detecta los movimientos cercanos y dispara esporas explosivas que van a la deriva hacia su objetivo.', 'Si eres hábil, puedes redirigir las esporas hacia ellos y observar cómo perecen en una explosión que ellos mismos han creado. Se puede sacar una lección de esto, creo.']
    },
    {
      nombre: "Restos Fungificados",
      src: "../assets/media/personajes/restos-fungificados.webp",
      width: 200,
      vida: [15],
      recompensa: [5],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Los restos de un insecto, consumidos por un hongo. Suele liberar nubes de un gas denso y mortífero.', '¡Los insectos de Hallownest son tan patéticos que tienen más posibilidades de sobrevivir cuando están infectados por hongos venenosos! Son realmente unas criaturas absurdas.']
    },
    {
      nombre: "Fungiguerrero",
      src: "../assets/media/personajes/fungiguerrero.webp",
      width: 150,
      vida: [20],
      recompensa: [8],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Criatura fúngica que ataca a los intrusos para proteger a sus crías.', '¡Algo extraño en el aire ha provocado que a estas setas les salgan corazones, mentes e incluso rostros! Eso quiere decir que ahora tienen miedo por su vida, como todas las demás criaturas vivas.']
    },
    {
      nombre: "Fungiogro",
      src: "../assets/media/personajes/fungiogro.webp",
      width: 200,
      vida: [80],
      recompensa: [45],
      ubicacion: ['Páramos Fúngicos'],
      descripcion: ['Enorme criatura fúngica. Ataca escupiendo veneno corrosivo y embistiendo con su cuerpo a sus enemigos.', '¿Estas enormes cosas son bestias o son setas? Corté una por la mitad para ver lo que tenía dentro, pero no pude encontrar ninguna respuesta en sus suaves y apestosas entrañas.']
    },
    {
      nombre: "Joven Mantis",
      src: "../assets/media/personajes/joven-mantis.webp",
      width: 180,
      vida: [15],
      recompensa: [5],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Miembro de una orgullosa tribu, quien protege ferozmente su territorio. Lanza ataques punzantes con su abdomen con forma de aguja afilada.', 'Conforme crece, pierde la capacidad de volar. Se suele celebrar el paso a la edad adulta, pero a medida que transcurre el tiempo, nos damos cuenta de lo que hemos perdido.']
    },
    {
      nombre: "Guerrero Mantis",
      src: "../assets/media/personajes/guerrero-mantis.webp",
      width: 260,
      vida: [20],
      recompensa: [12],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Miembro de una orgullosa tribu, quien protege ferozmente su territorio. Lanza ataques salvajes con sus afiladas extremidades.', 'Si te adentras demasiado en los bosques fúngicos, estos guerreros se interpondrán en tu camino. ¿Qué es lo que protegen allí en lo más profundo de su territorio?']
    },
    {
      nombre: "Señores Mantis",
      src: "../assets/media/personajes/señores-mantis.webp",
      width: 260,
      vida: [530],
      recompensa: ['Entrada a Nido Profundo', 'Marca de Orgullo', 'Sello de Hollownest', 620],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Son los líderes de la tribu mantis, y sus mejores guerreros. Portan finas lanzas aguijón, y atacan con la velocidad del rayo.', 'La tribu mantis y los insectos de Hallownest no se llevaban demasiado bien. Sin embargo, las mantis consiguieron sobrevivir a sus rivales, y su civilización aún perdura.']
    },
    {
      nombre: "Cáscara Centinela",
      src: "../assets/media/personajes/cascara-centinela.webp",
      width: 100,
      vida: [25],
      recompensa: [10],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Los restos reanimados de un centinela de Hallownest. Aún conserva algunos recuerdos de su anterior cometido.', 'Más habilidoso en combate que la mayoría de los insectos de Hallownest, es ágil, aunque ligeramente blindado. No le des ni un respiro.']
    },
    {
      nombre: "Centinela Pesado",
      src: "../assets/media/personajes/centinela-pesado.webp",
      width: 260,
      vida: [35],
      recompensa: [10],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Los restos reanimados de un gran centinela de Hallownest. Uno de los pocos de Hallownest lo suficientemente fuertes para empuñar un gran aguijón.', 'Sorprendentemente astuto para un cadáver. Tratará de agarrarte si saltas por encima de él y puede perseguirte si huyes. Es divertido cazarlo, pero ten cuidado si van en grupo.']
    },
    {
      nombre: "Centinela Alado",
      src: "../assets/media/personajes/centinela-alado.webp",
      width: 250,
      vida: [25],
      recompensa: [12],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Centinela volador de Hallownest. Patrulla las alturas de la enorme caverna en la que se levanto la ciudad.', 'Baila por el aire fuera de tu alcance hasta que encuentra una apertura y, luego, se abalanza para asestar un golpe decisivo. Si estas seguro de ti mismo, espera a que se acerque a ti y contraataca.']
    },
    {
      nombre: "Centinela Lancero",
      src: "../assets/media/personajes/centinela-lancero.webp",
      width: 260,
      vida: [25],
      recompensa: [12],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Centinela alado de Hallownest equipado con una lanza aguijón. Carga contra las amenazas o tira su lanza a distancia.', 'Este taimado enemigo mantendrá a menudo la distancia y tratará de acabar contigo con sus armas arrojadizas. Cuando cargue contra ti, salta y destrúyelo.']
    },
    {
      nombre: "Error",
      src: "../assets/media/personajes/error.webp",
      width: 160,
      vida: [13],
      recompensa: [3],
      ubicacion: ['Santuario de Almas'],
      descripcion: ['Fue una vez un insecto muy inteligente, pero ahora está deformado por usar mal el alma.', 'Estos insensatos juguetearon con el alma de otras criaturas y perdieron su forma. Ahora merodean por las sombras de su Santuario como babosas y esperan que sus antiguos hermanos les construyan nuevos cuerpos.']
    },
    {
      nombre: "Folly",
      src: "../assets/media/personajes/folly.webp",
      width: 140,
      vida: [13],
      recompensa: [5],
      ubicacion: ['Santuario de Almas'],
      descripcion: ['Fue una vez un insecto muy inteligente, pero ahora está inflado por usar mal el alma.', 'He oído susurros de que el secreto que buscaban estos insensatos era la inmortalidad. Vivir para siempre... ¡Nunca he escuchado nada más obsceno!']
    },
    {
      nombre: "Tuercealmas",
      src: "../assets/media/personajes/tuercealmas.webp",
      width: 200,
      vida: [35],
      recompensa: [25],
      ubicacion: ['Santuario de Almas'],
      descripcion: ['Insecto muy inteligente que usa conocimientos arcanos para convertir el alma en despiadados hechizos.', 'He oído a otros hablar sobre el «alma», pero yo no entiendo de qué se trata realmente. Sé que la carne recién matada es la que mejor sabe; ¿será porque el «alma» aún se aferra a ella?']
    },
    {
      nombre: "Guerrero del Alma",
      src: "../assets/media/personajes/guerrero-del-alma.webp",
      width: 180,
      vida: [180, 300],
      recompensa: [200],
      ubicacion: ['Santuario de Almas', 'Coliseo de los Insensatos'],
      descripcion: ['Insecto erudito que empuña una refinada aguja. Aumenta su destreza en combate con el alma reunida.', 'A estos extraños guerreros les siguen susurros allí donde vayan. No solo son hábiles con el aguijón, sino que también pueden usar un poder extraño para pasar de repente de un lugar a otro. Permanece alerta.']
    },
    {
      nombre: "Maestro de Almas",
      src: "../assets/media/personajes/maestro-de-almas.webp",
      width: 250,
      vida: [385],
      recompensa: ['Salto Desolador'],
      ubicacion: ['Santuario de Almas', 'Hogar de Dioses'],
      descripcion: ['Líder del Santuario de Almas. Acumuló alma con la esperanza de mantener a raya el infortunio de Hallownest, pero terminó intoxicándose de su poder.', 'Los insectos de Hallownest probaron todo tipo de trucos, rituales y plegarias para deshacerse de la infección. ¡Pero nada les dio resultado! Quizás la infección provenía de algo en su interior de lo que no podían escapar.']
    },
    {
      nombre: "Cáscara Dandy",
      src: "../assets/media/personajes/cascara-dandy.webp",
      width: 70,
      vida: [20],
      recompensa: [9],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Antiguo miembro de la alta sociedad de Hallownest. Su habilidad ofensiva es muy limitada.', 'Parece ser que los miembros más débiles y codiciosos de Hallownest también eran los que ejercían más influencia. Ese reino siempre estaba abocado a su destrucción.']
    },
    {
      nombre: "Cáscara Glotona",
      src: "../assets/media/personajes/cascara-glotona.webp",
      width: 120,
      vida: [30],
      recompensa: [11],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Antiguo miembro de la alta sociedad de Hallownest. Usa su corpulento cuerpo como un arma.', 'A medida que estos insectos se hacían más ricos, cazaban menos y consumían más, con lo que al final adoptaban una grotesca forma no muy alejada de la de una fruta demasiado madura.']
    },
    {
      nombre: "Gran Cáscara Centinela",
      src: "../assets/media/personajes/gran-cascara-centinela.webp",
      width: 250,
      vida: [170],
      recompensa: [50],
      ubicacion: ['Ciudad de Lágrimas'],
      descripcion: ['Los restos reanimados de un gran centinela, la élite de los guardias de la ciudad. Porta un gran aguijón y una coraza. Sus potentes ataques infligen mucho daño.', 'Se trata de algo extremadamente raro, un insecto de Hallownest que supone una amenaza. Obsérvalos con cuidado, ya que pueden atacar súbitamente y propinar golpes devastadores.']
    },
    {
      nombre: "Caballero Vigía",
      src: "../assets/media/personajes/caballero-vigia.webp",
      width: 240,
      vida: [220],
      recompensa: ['Sello de Hollownest', 'Acceso a Lurien el Vigilante', 650],
      ubicacion: ['Torre del Vigía'],
      descripcion: ['Coraza de un Caballero vigía, reanimada por un enjambre de moscas infectadas.', 'Cuando estos silenciosos guerreros caen en batalla, sus cuerpos se abren y de ellos salen volando extraños insectos. Me pregunto qué saldrá volando de mí cuando muera. ¿Mis esperanzas y mis miedos saldrán disparados hasta perderse en la oscuridad?']
    },
    {
      nombre: "Coleccionista",
      src: "../assets/media/personajes/coleccionista.webp",
      width: 250,
      vida: [750],
      recompensa: ['Mapa del Coleccionista', '3 Larvas cautivas'],
      ubicacion: ['Torre del Amor'],
      descripcion: ['Esta sombra tenebrosa está encerrada en la Torre del Amor. Conserva a las criaturas de Hallownest en jarras de cristal, aunque está particularmente interesada en las larvas.', 'Una sombra que se desliza por las cavernas realizando extraños sonidos. Nunca la he visto con claridad, así que no sé qué tipo de criatura es.']
    },
    {
      nombre: "Barrílula",
      src: "../assets/media/personajes/barrilula.webp",
      width: 120,
      vida: [5],
      recompensa: [2],
      ubicacion: ['Ciudad de Lágrimas', 'Tierras de Reposo', 'Canales Reales', 'Cuenca Antigua', 'Límite del Reino', ' Coliseo de los Insensatos'],
      descripcion: ['Sus finas alas ocultan una barriga muy volátil. Sacrificará su propia vida para proteger su territorio.', 'Una criatura furiosa que no aprecia su propia vida. Una criatura sin miedo... ¿de verdad se le puede llamar «presa»?']
    },
    {
      nombre: "Defensor del Estiércol",
      src: "../assets/media/personajes/defensor-del-estiercol.webp",
      width: 240,
      vida: [700],
      recompensa: ['Blasón del Defensor', 'Acceso a la Arboleda de Isma'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Un hábil guerrero que vive en el corazón de los Canales. Ataca a los intrusos con esferas compactas de estiércol.', 'Luchar por «honor» o por «lealtad»... es lo mismo que luchar por cenizas. Si quieres matar, hazlo por tu propio bien. Así se comporta un auténtico cazador.']
    },
    {
      nombre: "Defensor Blanco",
      src: "../assets/media/personajes/defensor-blanco.webp",
      width: 220,
      vida: [1600],
      recompensa: ['300 de Esencia (primera victoria)', 'Estatua de estiércol del Caballero (quinta victoria)'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Figura de un pasado recordado con afecto. Reacciona galantementeante la derrota volviéndose mas fuerte.', 'La llamada del campeón, la arboleda enredada, la batalla del Wyrm Negro... Lo recuerdo todo. Me llevaré esa gloria conmigo siempre... hasta que nos volvamos a encontrar.']
    },
    {
      nombre: "Tremacría",
      src: "../assets/media/personajes/tremacria.webp",
      width: 60,
      vida: [15],
      recompensa: ['-'],
      ubicacion: ['Canales Reales'],
      descripcion: ['El más joven de su especie. Su cuerpo se compone de dientes, alas y estómago.', 'Parece querer aferrarse a cualquier ser vivo que se le acerque con sus pequeños y afilados dientes. Aunque deja a los de su especie tranquilos, por lo que no es completamente descerebrado.']
    },
    {
      nombre: "Tremadora",
      src: "../assets/media/personajes/tremadora.webp",
      width: 80,
      vida: [55],
      recompensa: [6],
      ubicacion: ['Canales Reales'],
      descripcion: ['Criatura con forma de gusano que prefiere hábitats húmedos y oscuros.', 'Enemigos peligrosos e impredecibles que infectan las tuberías de debajo de la capital de Hallownest. Incluso cuando parezca que los has matado, debes mantenerte alerta.']
    },
    {
      nombre: "Tremaenorme",
      src: "../assets/media/personajes/tremaenorme.webp",
      width: 180,
      vida: [150],
      recompensa: [23],
      ubicacion: ['Canales Reales'],
      descripcion: ['Viejo trematodo, ha crecido gracias a los ricos desechos que se pueden encontrar en las tuberías bajo la capital.', 'Cuando los depredadores tienen demasiado éxito la comida en exceso que comen se convierte en una fina capa pegada a sus cuerpos. Aun así, al menos, estas criaturas parecen hacer buen uso de su peso adicional.']
    },
    {
      nombre: "Tremarmita",
      src: "../assets/media/personajes/tremarmita.webp",
      width: 160,
      vida: [350],
      recompensa: ['Tremanido'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Un reproductor insaciable. Ha poblado los Canales con los de su especie. Sus entrañas actúan como un nido para las jóvenes tremacrías.', 'El deseo de reproducirse, de dejar atrás un recuerdo de nosotros en forma de un descendiente... parece estar bien impregnado en el corazón de toda criatura viva. Yo también he sentido el reclamo de ese instinto básico.']
    },
    {
      nombre: "Cazador de Cristal",
      src: "../assets/media/personajes/cazador-de-cristal.webp",
      width: 80,
      vida: [25],
      recompensa: [6],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Dispara fragmentos de cristales que crecen rápidamente a los intrusos.', 'Hacen de la cima del mundo su hogar. ¿Usan sus cristales voluntariamente como armas o son simplemente huéspedes y los cristales, parásitos?']
    },
    {
      nombre: "Cáscara Minera",
      src: "../assets/media/personajes/cascara-minera.webp",
      width: 100,
      vida: [20],
      recompensa: [10],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Los restos de un insecto atraído a la Cumbre de Cristal por sus cristales preciosos. Su garra-pico también actúa como un arma feroz.', 'Los insectos de Hallownest codiciaban las cosas más extrañas cuando vivían. Cavaban de forma furtiva en la tierra en busca de piedras, menas y, en especial, los cristales que crecen en la cima del mundo.']
    },
    {
      nombre: "Cáscara Cristalizada",
      src: "../assets/media/personajes/cascara-cristalizada.webp",
      width: 110,
      vida: [35],
      recompensa: [20],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Los restos de un insecto que murió entre los cristales. Reanimado por una extraña fuerza, ataca lanzando rayos de luz desde sus brazos cristalizados.', 'Los cristales que crecen en las cumbres ocultan algún tipo de poder extraño. Centellean y brillan en la oscuridad, y cada uno tiene un punto brillante que emite un calor abrasador. También cantan, si los escuchas. Muy suavemente...']
    },
    {
      nombre: "Guardian de Cristal",
      src: "../assets/media/personajes/guardian-de-cristal.webp",
      width: 180,
      vida: ['280 / 450'],
      recompensa: [385 + ' (Primer combate)', 550 + ' (Segundo combate)', 'Fragmento de Máscara (Segundo combate)'],
      ubicacion: ['Cumbre de Cristal'],
      descripcion: ['Corpulento minero de la Cumbre de Cristal cuyo cuerpo se ha visto superado por los cristales que le han crecido. Puede lanzar rayos de luz abrasadores desde sus extremidades cristalizadas.', '¿Cómo verá el mundo esta criatura que lo mira a través de su prisión de cristal? ¿Solo ve luz? ¿Es eso lo que lo enloquece de esa forma?']
    },
    {
      nombre: "Vengamosca Colérica",
      src: "../assets/media/personajes/vengamosca-colerica.webp",
      width: 180,
      vida: [40],
      recompensa: [20],
      ubicacion: ['Cruces Infectados', 'Coliseo de los Insensatos'],
      descripcion: ['Vengamosca cuyo cuerpo se ha deformado a causa de la continua infección. Muy agresiva.', 'La infección que pasa de una criatura a otra otorga fuerza y coraje, pero también parece esclavizar la voluntad. ¿Estarías dispuesto a aceptar un trato así?']
    },
    {
      nombre: "Cáscara Violenta",
      src: "../assets/media/personajes/cascara-violenta.webp",
      width: 100,
      vida: [40],
      recompensa: [15],
      ubicacion: ['Cruces Infectados'],
      descripcion: ['Enloquecido por una enorme infección. Se abalanza sobre los enemigos sin pensar en su propia seguridad.', 'Los insectos de Hallownest quedaron completamente deformados a causa de esa antigua enfermedad. Primero se sumieron en un profundo sueño, después despertaron con las mentes rotas y, por último, sus cuerpos empezaron a mutar...']
    },
    {
      nombre: "Cáscara Babeante",
      src: "../assets/media/personajes/cascara-babeante.webp",
      width: 100,
      vida: [15],
      recompensa: [17],
      ubicacion: ['Cruces Infectados'],
      descripcion: ['El cuerpo de un insecto, completamente consumido por la infección. Escupe líquido corrosivo.', 'La infección que asoló Hallownest hace tanto tiempo... dicen que cuanto más luchabas contra ella, más te consumía.']
    },
    {
      nombre: "Cavasuelos",
      src: "../assets/media/personajes/cavasuelos.webp",
      width: 160,
      vida: [20],
      recompensa: [6],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Depredador de Nido Profundo que se mueve en manada. Escarba en la tierra y emerge de ella para sorprender a su presa.', 'Elásticos y despiadados, estos cazadores tratarán de abrumarte con sus números en las cavernas serpenteantes, estrechas y oscuras en las que hurgan en el suelo. ¡Permanece siempre alerta!']
    },
    {
      nombre: "Eclosionador Cavador",
      src: "../assets/media/personajes/eclosionador-cavador.webp",
      width: 200,
      vida: [30],
      recompensa: [25],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Criatura voladora que dispara cavasuelos de su cuerpo cuando se le acerca una posible presa.', '¿Son estas criaturas las madres de los cavauelos? Solo parecen estar vagamente relacionados. ¿Pero cómo se meten los cavauelos dentro de los eclosionadores? Una situación confusa.']
    },
    {
      nombre: "Trepacadáveres",
      src: "../assets/media/personajes/trepacadaveres.webp",
      width: 160,
      vida: [18],
      recompensa: [10],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Bestia parasitaria que controla el cuerpo de su huésped incluso después de la muerte de este último.', 'Las bestias de estos lugares han encontrado bastantes escondites ingeniosos, ¡pero ninguno tan inteligente como el cuerpo de otra criatura! Si te cruzas con un bicho así, ¡disfruta! ¡Habrás cazado dos criaturas a la vez!']
    },
    {
      nombre: "Necrocría",
      src: "../assets/media/personajes/necrocria.webp",
      width: 90,
      vida: [15],
      recompensa: ['-'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Bebé de Nido Profundo. Se escabulle por la oscuridad, aprendiéndose la distribución de su hogar.', 'Nido Profundo es un lugar peligroso para cazar, pero gratificante. Mantente alerta por si ves criaturas débiles que puedas comerte. Tienes que mantener la fuerza en la oscuridad.']
    },
    {
      nombre: "Necrocazador",
      src: "../assets/media/personajes/necrocazador.webp",
      width: 90,
      vida: [18],
      recompensa: [7],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Se arrastra por paredes y techos y escupe veneno ardiente a todo el que pase por allí.', 'Puede ser difícil de detectar, ya que se funden con la oscuridad y surgen de ella de repente. Busca sus ojos brillantes.']
    },
    {
      nombre: "Minitejedora",
      src: "../assets/media/personajes/minitejedora.webp",
      width: 190,
      vida: [30],
      recompensa: [17],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Ágil araña que cruza sus dominios usando finos hilos de tela. Espera pacientemente para tender emboscadas.', '¡Puede aparecer en cualquier momento de entre las sombras! Parece que vuelan por el aire mientras se mueven por hilos invisibles para acechar a sus presas sin hacer ruido.	']
    },
    {
      nombre: "Devoto Acechador",
      src: "../assets/media/personajes/devoto-acechador.webp",
      width: 240,
      vida: [100],
      recompensa: [43],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Adoradores de Herrah, la Bestia. Se protegen con antegarras reforzadas y, luego, atacan súbitamente a su presa para acabar con ella.', 'Poderosos, fuertemente blindados y rápidos, no son meras bestias. Estudia sus movimientos y busca detenidamente una apertura.']
    },
    {
      nombre: "Nosk",
      src: "../assets/media/personajes/nosk.webp",
      width: 240,
      vida: [680],
      recompensa: ['Mineral Pálido'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Adopta la forma de otras criaturas para atraer presas a su guarida.', 'En la oscuridad más profunda hay bestias con rostros robados de tu memoria que tratan de controlarte manipulando tus sentimientos. Conócete a ti mismo y no te dejes engañar.']
    },
    {
      nombre: "Mawlek Inferior",
      src: "../assets/media/personajes/mawlek-inferior.webp",
      width: 120,
      vida: [60],
      recompensa: [18],
      ubicacion: ['Cuenca Antigua', 'Coliseo de los Insensatos'],
      descripcion: ['Ataca escupiendo ácido y cortando con sus antegarras.', 'Si tratas de mantener la distancia, escupirá pegotes ardientes y pegajosos de repugnantes jugos estomacales. Acércate rápidamente y ataca con determinación.']
    },
    {
      nombre: "Mawlurk",
      src: "../assets/media/personajes/mawlurk.webp",
      width: 180,
      vida: [100],
      recompensa: [10],
      ubicacion: ['Cuenca Antigua'],
      descripcion: ['Criatura grande e inmóvil. Escupe veneno de forma salvaje cuando algún intruso pasa a su lado.', '¡¿Cómo habrán perdido las patas estas insensatas criaturas?! Supongo que es posible perderlo todo si de verdad te esfuerzas.']
    },
    {
      nombre: "Mawlek Incubador",
      src: "../assets/media/personajes/mawlek-incubador.webp",
      width: 240,
      vida: [300],
      recompensa: ['Fragmento de Máscara'],
      ubicacion: ['Cruces Olvidados', 'Coliseo de los Insensatos', 'Hogar de Dioses'],
      descripcion: ['Una criatura feroz, aunque extremadamente social. Se vuelve agresiva si no puede relacionarse con los de su propia especie.', 'Escucho a esta bestia gritar a veces mientras merodeo las cavernas, aunque nunca he posado mis ojos en ella. ¿A quién o qué está llamando? Por lo que yo sé, sus bramidos nunca obtienen respuesta.']
    },
    {
      nombre: "Globo Infectado",
      src: "../assets/media/personajes/globo-infectado.webp",
      width: 70,
      vida: [15],
      recompensa: ['-'],
      ubicacion: ['Cuenca Antigua'],
      descripcion: ['Célula unica de infección. Posee una mente primitiva y puede flotar gracias a sus gases internos.', 'La infección que recorre las venas muertas del reino... ¿es capaz de pensar? ¿Está dotada de alma? ¿Acaso está viva?']
    },
    {
      nombre: "Reseptaculo Roto",
      src: "../assets/media/personajes/reseptaculo-roto.webp",
      width: 180,
      vida: [525],
      recompensa: ['Alas de Monarca'],
      ubicacion: ['Cuenca Antigua', 'Hogar de Dioses'],
      descripcion: ['Cadáver destrozado, reanimado por parásitos infectados.', 'La forma de esta criatura... He visto algo similar antes. Más de una vez, incluso. Se parece un poco a los insectos de Hallownest, pero no es exactamente igual. ¿De dónde han venido estos pequeños errantes vacíos?']
    },
    {
      nombre: "Aspid Primigenio",
      src: "../assets/media/personajes/aspid-primigenio.webp",
      width: 100,
      vida: [35],
      recompensa: [6],
      ubicacion: ['Límite del Reino', 'Coliseo de los Insensatos'],
      descripcion: ['Una forma más salvaje y ancestral del aspid. Se pensaba que se habían extinguido, pero han reaparecido en los límites del mundo.', 'Estos crueles enemigos te emboscarán y atacarán incansablemente con su veneno abrasador. Qué raro que sus descendientes sean tan débiles. Si tengo hijos, espero que sean más fuertes que yo...']
    },
    {
      nombre: "Gran Saltamontes",
      src: "../assets/media/personajes/gran-saltamontes.webp",
      width: 120,
      vida: [120],
      recompensa: [30],
      ubicacion: ['Límite del Reino', 'Coliseo de los Insensatos'],
      descripcion: ['Salta por los límites del mundo tratando de aplastar a su presa con su cuerpo.', 'Un enemigo digno, sorprendentemente ágil para su tamaño. Mantén la distancia o trata de bailar entre sus saltos y golpear sus patas.']
    },
    {
      nombre: "Mímico Larva",
      src: "../assets/media/personajes/mimico-larva.webp",
      width: 140,
      vida: [45],
      recompensa: ['-'],
      ubicacion: ['Nido Profundo', 'Cumbre de Cristal', 'Coliseo de los Insensatos'],
      descripcion: ['Asume la forma de una criatura inofensiva para atraer a su presa.', 'Atraer a un enemigo fingiendo ser una pequeña y débil larva. ¡Muy astuto! Por desgracia para ellos, me como estas larvas en cuanto las veo.']
    },
    {
      nombre: "Soldado de la Colmena",
      src: "../assets/media/personajes/soldado-de-la-colmena.webp",
      width: 160,
      vida: [51],
      recompensa: [15],
      ubicacion: ['La Colmena'],
      descripcion: ['Defiende la Colmena contra intrusos con su aguijón extensible.', 'Guerreros salvajes y determinados. Tendrás que estar preparado para luchar hasta la muerte con ellos si planeas invadir su hogar.']
    },
    {
      nombre: "Guardián de la Colmena",
      src: "../assets/media/personajes/guardian-de-la-colmena.webp",
      width: 200,
      vida: [80],
      recompensa: [25],
      ubicacion: ['La Colmena'],
      descripcion: ['Protege la Colmena embistiendo a los intrusos con su enorme cuerpo.', 'Como su pariente más pequeño, su único instinto es proteger la Colmena a cualquier coste para sí mismos. Son algo torpes y normalmente dañarán la estructura de la Colmena al cargar contra los intrusos. ¿Les traerá esto deshonra? No sé si tienen la capacidad de sentir algo así.']
    },
    {
      nombre: "Caballero Colmena",
      src: "../assets/media/personajes/caballero-colmena.webp",
      width: 240,
      vida: [800],
      recompensa: ['Sangrecolmena'],
      ubicacion: ['La Colmena'],
      descripcion: ['Protector leal de la Reina de la Colmena. No puede volar pero es feroz en combate.', 'Algunas criaturas nacen con deberes y lealtadas marcadas imborrablemente en sus mentes. Son fuertes, pero también son esclavos.']
    },
    {
      nombre: "Cáscara Espinosa",
      src: "../assets/media/personajes/cascara-espinosa.webp",
      width: 110,
      vida: [40],
      recompensa: [12],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Desbordado por vegetación, ataca disparando afiladas espinas desde su cuerpo.', 'Las espinas que dispara parecen ser ligeramente venenosas. ¡No las uses para mondarte los colmillos después de comer!']
    },
    {
      nombre: "Loodle",
      src: "../assets/media/personajes/loodle.webp",
      width: 90,
      vida: [30],
      recompensa: [3],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Habita en las tierras salvajes junto a los Jardines de la Reina. Su naturaleza no es agresiva, pero sus continuos rebotes pueden ser peligrosos.', '¡Parecen tener una energía ilimitada! ¿Alguna vez se detienen a dormir, a comer o a amar?']
    },
    {
      nombre: "Petramantis",
      src: "../assets/media/personajes/petramantis.webp",
      width: 180,
      vida: [40],
      recompensa: [12],
      ubicacion: ['Jardines de la Reina', 'Coliseo de los Insensatos'],
      descripcion: ['Acecha entre el follaje y ataca lanzando viento con forma de guadaña a distancia.', 'Te atacarán desde lejos, así que acércate a ellos y golpea rápidamente. Sus cuerpos son frágiles y caerán rápidamente ante tu aguijón.']
    },
    {
      nombre: "Traidor Mantis",
      src: "../assets/media/personajes/traidor-mantis.webp",
      width: 140,
      vida: [70],
      recompensa: [21],
      ubicacion: ['Jardines de la Reina', 'Coliseo de los Insensatos'],
      descripcion: ['Antiguo miembro de la tribu mantis, ahora exiliado y alocado por la infección.', 'Pertenecer a una tribu o no pertenecer. La verdad es que no entiendo cuál es la diferencia, ni cómo funciona. Yo no tengo tribu.']
    },
    {
      nombre: "Señor Desleal",
      src: "../assets/media/personajes/señor-desleal.webp",
      width: 180,
      vida: [800],
      recompensa: ['Acceso a la Dama Blanca'],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Cacique destituido de la tribu mantis. Decidió aceptar la infección y se volvió contra sus hermanas.', 'Yo también he sentido esa tentación. La tentación de dejar que la infección entre en mí. Sería más fuerte, más poderoso... esas ideas siguen emponzoñando mis sueños durante los momentos difíciles. Es una mentira, pero brilla tanto que puede confundir tu mente.']
    },
    {
      nombre: "Baldur Espinado",
      src: "../assets/media/personajes/baldur-espinado.webp",
      width: 100,
      vida: [65],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un baldur fortalecido, criado para combatir en el Coliseo de los Insensatos. Es más resistente y agresivo que su antecesor salvaje.', 'Estas criaturas... Nunca he visto a una que haya alcanzado la madurez. Supongo que no se les permite vivir tanto.']
    },
    {
      nombre: "Mosquito Blindado",
      src: "../assets/media/personajes/mosquito-blindado.webp",
      width: 100,
      vida: [40],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un mosquito fortalecido, criado para combatir en el Coliseo de los Insensatos. Es más resistente y agresivo que su antecesor salvaje.', '¡Rápido y fuerte! ¡Cuando cojan impulso, prepárate para contraatacar o quítate de en medio!']
    },
    {
      nombre: "Oblobble",
      src: "../assets/media/personajes/oblobble.webp",
      width: 220,
      vida: [260],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Primo mayor del obble. Conserva a su pareja de por vida, y jamás la abandona.', 'Tener una pareja a tu lado... alguien que no te dejará hasta su muerte. Curioso. Nunca ha encontrado a nadie que quiera permanecer a mi lado...']
    },
    {
      nombre: "Insensato Escudado",
      src: "../assets/media/personajes/insensato-escudado.webp",
      width: 150,
      vida: [65],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Se acerca cuidadosamente a sus rivales manteniendo su caparazón en alto.', 'Este «Coliseo» es un lugar extraño en el que algunos insectos luchan a muerte mientras otros les observan. No entiendo estos extraños rituales. Si decides entrar, procura mantenerte en guardia.']
    },
    {
      nombre: "Insensato Fornido",
      src: "../assets/media/personajes/insensato-fornido.webp",
      width: 180,
      vida: [80],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Usa hojas con forma de luna creciente para acabar con sus rivales.', '¡Puedes golpear sus armas giratorias cuando estén en el aire para volverlas en su contra! Esto puede resultarte útil si te acorrala.']
    },
    {
      nombre: "Insensato Alado",
      src: "../assets/media/personajes/insensato-alado.webp",
      width: 160,
      vida: [70],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Se aleja volando del alcance de su oponente y luego se lanza hacia él para darle un golpe mortal.', '¿Los luchadores que combaten en el Coliseo esperan conseguir algo? ¿Son esclavos, prisioneros o simplemente decidieron que querían luchar?']
    },
    {
      nombre: "Insensato Pesado",
      src: "../assets/media/personajes/insensato-pesado.webp",
      width: 180,
      vida: [90],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Un guerrero que lucha en el Coliseo de los Insensatos para alcanzar la gloria. Carga lleno de furia contra los enemigos.', 'Grande y corpulento, lucha para conservar la vida. ¡No subestimes a este luchador! Puede moverse rápidamente a pesar de su tamaño. Además, detrás de esa máscara se oculta un rostro sorprendentemente hermoso.']
    },
    {
      nombre: "Loodle Letal",
      src: "../assets/media/personajes/loodle-letal.webp",
      width: 120,
      vida: [45],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Loodle equipado con un yelmo y entrenado para matar.', 'Parecen muy fieros, pero tienen problemas a la hora de dirigir sus ataques. Observa atentamente sus movimientos y ataca en el momento adecuado. Llévate su yelmo como trofeo.']
    },
    {
      nombre: "Tuercerayos",
      src: "../assets/media/personajes/tuercerayos.webp",
      width: 190,
      vida: [80],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Insecto erudito que ha convertido las enseñanzas del Santuario de Almas en una técnica de combate letal. Ataca lanzando descargas eléctricas.', 'Al parecer, solo se alimenta de lumélulas y pasa toda su vida luchando en la arena o meditando en solitario. Un enemigo peculiar.']
    },
    {
      nombre: "Domador de Dioses",
      src: "../assets/media/personajes/domador-de-dioses.webp",
      width: 220,
      vida: [1100],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Una guerrera veterana del Coliseo de los Insensatos. Lucha junto a las criaturas que ha entrenado.', 'Algunos cazadores entrenan a bestias para que les acompañen cuando van tras sus presas. Una vez lo intenté, pero no pude resistir la tentación de comparar la fuerza de mi compañero con la mía.']
    },
    {
      nombre: "Zotito Alado",
      src: "../assets/media/personajes/zotito-alado.webp",
      width: 160,
      vida: [20],
      recompensa: ['-'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. Asiste a su maestro a regañadientes volando perezosamente hacia los enemigos.', '"Ella preguntó si le había comprado el Amuleto, como había prometido, pero entonces él lo explicó. El amuleto era realmente de baja calidad y no merecía la pena por aquel precio.Ella entendió la sabiduría de su decisión perfectamente."']
    },
    {
      nombre: "Zotito Saltarín",
      src: "../assets/media/personajes/zotito-saltarin.webp",
      width: 160,
      vida: [20],
      recompensa: ['-'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. Salta de una manera poco amenazante.', '《¿La humilde esposa del cartógrafo? ¡Hah! Mi reina; ¿cómo puedes compararte con ella? ¡En la cara de tu belleza intoxicante las demás hembras son solamente polvo!》']
    },
    {
      nombre: "Zotito Volátil",
      src: "../assets/media/personajes/zotito-volatil.webp",
      width: 180,
      vida: [30],
      recompensa: ['-'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. No soporta la presión de existir y explota rápidamente.', '"El Príncipe Gris era errante por naturaleza, pero ella no podía soportar el separarse de él. Por lo que él ideó un plan para estar seguro de que ella y su príncipe estarían juntos por siempre. Ella solo tenía que esperar su oportunidad."']
    },
    {
      nombre: "Grimario Novato",
      src: "../assets/media/personajes/grimario-novato.webp",
      width: 130,
      vida: [50],
      recompensa: ['Llama para Niño de Grimm'],
      ubicacion: ['Sendero Verde', 'Cumbre de Cristal', 'Ciudad de Lágrimas'],
      descripcion: ['Joven y juguetón espíritu de la compañía de Grimm. Como parte del Ritual, recoge la llama escarlata en su linterna. Renunciará a la llama cuando sea derrotado.', 'Las sombras sueñan con fuego eterno. Llamas devoran ascuas en su descenso.  Uno encenderá la Luz del Horror. Llama y sirve en la Tropa del Terror']
    },
    {
      nombre: "Grimario Maestro",
      src: "../assets/media/personajes/grimario-maestro.webp",
      width: 170,
      vida: [75],
      recompensa: ['Llama para Niño de Grimm'],
      ubicacion: ['Paso del Rey', 'Tierras de Reposo', 'Límite del Reino'],
      descripcion: ['Poderoso y devoto espíritu de la compañía de Grimm. Como parte del Ritual, recoge llama escarlata con su linterna. Renunciará a la llama cuando sea derrotado.', 'Sueño oscuro, luces rojas, chispas danzan. La pesadilla escarlata, el salvaje brillo. las visiones bailan y las llamas hablan. Quema al padre alimenta al niño']
    },
    {
      nombre: "Grimario Pesadilla",
      src: "../assets/media/personajes/grimario-pesadilla.webp",
      width: 170,
      vida: [100],
      recompensa: ['Llama para Niño de Grimm'],
      ubicacion: ['La Colmena', 'Núcleo Fúngico', 'Cuenca Antigua'],
      descripcion: ['Espíritu de una pesadilla terrorífica de la compañía de Grimm. Como parte del Ritual, recoge llama escarlata con su linterna. Renunciará a la llama cuando sea derrotado.', 'Baila y muere y vive eternamente. Gritan y cantan voces silenciosas. Frente al oscuro corazón latente. El Rey Pesadilla arde entre brasas']
    },
    {
      nombre: "Carcasa Real",
      src: "../assets/media/personajes/carcasa-real.webp",
      width: 140,
      vida: [170],
      recompensa: ['-'],
      ubicacion: ['Palacio Blanco'],
      descripcion: ['Ser artificial, guardián del palacio de Hallownest y habilidoso portador de la garra hoz. Su pesada coraza blanca protege un cuerpo frágil.', 'Dicen que el antiguo rey murió hace mucho tiempo, pero su influencia aún perdura entre nosotros. Una criatura así... ¿qué deseaba?']
    },
    {
      nombre: "Hermano",
      src: "../assets/media/personajes/hermano.webp",
      width: 100,
      vida: [20],
      recompensa: ['-'],
      ubicacion: ['El Abismo'],
      descripcion: ['Fragmento de una voluntad que persiste.', 'Muy por debajo de nosotros, en las profundidades del reino, el aire cada vez se mueve menos y se instala una sensación de vacío. ¿Puede florecer la vida allí? Si es así, la cazaré.']
    },
    {
      nombre: "Tentáculos del Vacío",
      src: "../assets/media/personajes/tentaculos-del-vacio.webp",
      width: 260,
      vida: ['-'],
      recompensa: ['-'],
      ubicacion: ['El Abismo'],
      descripcion: ['Fragmentos del vacío convertidos en tentáculos afilados y lacerantes.', 'Los insectos de Hallownest solían preguntarse si había otros reinos más antiguos y extraños bajo ellos. Tenían ideas realmente extrañas. Tal vez por eso siempre andaban distraídos y era tan fácil matarlos.']
    },
    {
      nombre: "Hollow Knight",
      src: "../assets/media/personajes/hollow-knight.webp",
      width: 240,
      vida: [1000],
      recompensa: ['-'],
      ubicacion: ['Templo del Huevo Negro'],
      descripcion: ['Receptáculo adulto que encierra al corazón de la plaga en su cuerpo.', 'El antiguo Rey de Hallownest... llegó a tomar medidas desesperadas para salvar su pequeño mundo. Obligó a muchos a realizar tremendos sacrificios... y todo para nada.']
    },
    {
      nombre: "Vasija Pura",
      src: "../assets/media/personajes/vasija-pura.webp",
      width: 160,
      vida: [1600],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Vasija elegida, criada y entrenada para su forma primigenia.', '"¡El más profundo silencio en coraza sagrada, recibió el aguijón y fue nombrado caballero, vasija hechizada en un huevo, sellada. Escucha nuestra plegaria! ¡Tu Luz queremos ver revelada!"']
    },
    {
      nombre: "Destello",
      src: "../assets/media/personajes/destello.webp",
      width: 250,
      vida: [1700],
      recompensa: ['-'],
      ubicacion: ['-'],
      descripcion: ['La luz, olvidada hace mucho.', 'La plaga, la infección, la locura que reanima los cadáveres de Hallownest... el brillo que surge de los ojos de un reino muerto. ¿De dónde procede? Supongo que es algo que está más allá del entendimiento de mortales como yo.']
    },
    {
      nombre: "Sombra",
      src: "../assets/media/personajes/sombra.webp",
      width: 120,
      vida: ['-'],
      recompensa: ['Geo perdido en muerte reciente'],
      ubicacion: ['-'],
      descripcion: ['Eco de una vida anterior. Derrótala para obtener su poder y estar completo de nuevo.', 'Cada uno de nosotros deja una huella cuando muere. Un mancha en el mundo. No creo que este reino pueda soportar el peso de tantas vidas pasadas durante mucho más tiempo...']
    }
  ];





  // todo -------------------------------------------------- JEFES -------------------------------------------------- todo //
  public jefes = [
    {
      nombre: "Rey Vengamosca",
      src: "../assets/media/personajes/rey-vengamosca.webp",
      width: 200,
      vida: [90],
      recompensa: [65],
      ubicacion: ['Sendero Verde', 'Coliseo de los Insensatos'],
      descripcion: ['El patriarca de la colonia de las vengamoscas. Se abalanza en picado sobre los intrusos y llama refuerzos si se ve amenazado.', 'Una asquerosa criatura a la que le gusta masticar cualquier porquería que encuentre tirada en el suelo de la caverna. Cuando se percata de una amenaza, emitirá molestos gritos y chillidos, así que mátalo rápido.']
    },
    {
      nombre: "Madre Gruz",
      src: "../assets/media/personajes/madre-gruz.webp",
      width: 200,
      vida: [90],
      recompensa: [50],
      ubicacion: ['Cruces Olvidados', 'Coliseo de los Insensatos'],
      descripcion: ['Gruzzer maduro que lleva a sus crías en la barriga. Ataca lanzándose con su enorme cuerpo.', 'Sorprendentemente, este monstruo no pone huevos, sino que lleva a sus crías dentro de su gordo estómago. Esta extraña práctica parece agotar a la criatura, que queda adormilada y vulnerable. ¡Aprovecha ese momento!']
    },
    {
      nombre: "Falso Caballero",
      src: "../assets/media/personajes/falso-caballero.webp",
      width: 260,
      vida: [355],
      recompensa: ['Emblema de la Ciudad', 200],
      ubicacion: ['Cruces Olvidados', 'Hogar de Dioses'],
      descripcion: ['Un gusano al que una fuerza extraña ha vuelto loco. Vive en una coraza blindada robada.', 'A las criaturas débiles les encanta robar la fuerza de los demás. Sus vidas son efímeras y están llenas de miedo, pero anhelan tener el poder para dominar a quienes los han dominado.']
    },
    {
      nombre: "Uumuu",
      src: "../assets/media/personajes/uumuu.webp",
      width: 220,
      vida: [300],
      recompensa: ['-'],
      ubicacion: ['Archivos de la Maestra'],
      descripcion: ['Ser inteligente que protege la cámara interior de los Archivos de la Maestra.', 'El desfiladero de abajo, el que está repleto de neblina y chisporrotea con una energía extraña... un cazador puede perder todos sus sentidos allí abajo. Ten cuidado... allí acechan cosas extrañas y antinaturales.']
    },
    {
      nombre: "Señores Mantis",
      src: "../assets/media/personajes/señores-mantis.webp",
      width: 260,
      vida: [530],
      recompensa: ['Entrada a Nido Profundo', 'Marca de Orgullo', 'Sello de Hollownest', 620],
      ubicacion: ['Aldea Mantis'],
      descripcion: ['Son los líderes de la tribu mantis, y sus mejores guerreros. Portan finas lanzas aguijón, y atacan con la velocidad del rayo.', 'La tribu mantis y los insectos de Hallownest no se llevaban demasiado bien. Sin embargo, las mantis consiguieron sobrevivir a sus rivales, y su civilización aún perdura.']
    },
    {
      nombre: "Maestro de Almas",
      src: "../assets/media/personajes/maestro-de-almas.webp",
      width: 250,
      vida: [385],
      recompensa: ['Salto Desolador'],
      ubicacion: ['Santuario de Almas', 'Hogar de Dioses'],
      descripcion: ['Líder del Santuario de Almas. Acumuló alma con la esperanza de mantener a raya el infortunio de Hallownest, pero terminó intoxicándose de su poder.', 'Los insectos de Hallownest probaron todo tipo de trucos, rituales y plegarias para deshacerse de la infección. ¡Pero nada les dio resultado! Quizás la infección provenía de algo en su interior de lo que no podían escapar.']
    },
    {
      nombre: "Caballero Vigía",
      src: "../assets/media/personajes/caballero-vigia.webp",
      width: 240,
      vida: [220],
      recompensa: ['Sello de Hollownest', 'Acceso a Lurien el Vigilante', 650],
      ubicacion: ['Torre del Vigía'],
      descripcion: ['Coraza de un Caballero vigía, reanimada por un enjambre de moscas infectadas.', 'Cuando estos silenciosos guerreros caen en batalla, sus cuerpos se abren y de ellos salen volando extraños insectos. Me pregunto qué saldrá volando de mí cuando muera. ¿Mis esperanzas y mis miedos saldrán disparados hasta perderse en la oscuridad?']
    },
    {
      nombre: "Coleccionista",
      src: "../assets/media/personajes/coleccionista.webp",
      width: 250,
      vida: [750],
      recompensa: ['Mapa del Coleccionista', '3 Larvas cautivas'],
      ubicacion: ['Torre del Amor'],
      descripcion: ['Esta sombra tenebrosa está encerrada en la Torre del Amor. Conserva a las criaturas de Hallownest en jarras de cristal, aunque está particularmente interesada en las larvas.', 'Una sombra que se desliza por las cavernas realizando extraños sonidos. Nunca la he visto con claridad, así que no sé qué tipo de criatura es.']
    },
    {
      nombre: "Defensor del Estiércol",
      src: "../assets/media/personajes/defensor-del-estiercol.webp",
      width: 240,
      vida: [700],
      recompensa: ['Blasón del Defensor', 'Acceso a la Arboleda de Isma'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Un hábil guerrero que vive en el corazón de los Canales. Ataca a los intrusos con esferas compactas de estiércol.', 'Luchar por «honor» o por «lealtad»... es lo mismo que luchar por cenizas. Si quieres matar, hazlo por tu propio bien. Así se comporta un auténtico cazador.']
    },
    {
      nombre: "Defensor Blanco",
      src: "../assets/media/personajes/defensor-blanco.webp",
      width: 220,
      vida: [1600],
      recompensa: ['300 de Esencia (primera victoria)', 'Estatua de estiércol del Caballero (quinta victoria)'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Figura de un pasado recordado con afecto. Reacciona galantementeante la derrota volviéndose mas fuerte.', 'La llamada del campeón, la arboleda enredada, la batalla del Wyrm Negro... Lo recuerdo todo. Me llevaré esa gloria conmigo siempre... hasta que nos volvamos a encontrar.']
    },
    {
      nombre: "Tremarmita",
      src: "../assets/media/personajes/tremarmita.webp",
      width: 160,
      vida: [350],
      recompensa: ['Tremanido'],
      ubicacion: ['Canales Reales'],
      descripcion: ['Un reproductor insaciable. Ha poblado los Canales con los de su especie. Sus entrañas actúan como un nido para las jóvenes tremacrías.', 'El deseo de reproducirse, de dejar atrás un recuerdo de nosotros en forma de un descendiente... parece estar bien impregnado en el corazón de toda criatura viva. Yo también he sentido el reclamo de ese instinto básico.']
    },
    {
      nombre: "Nosk",
      src: "../assets/media/personajes/nosk.webp",
      width: 240,
      vida: [680],
      recompensa: ['Mineral Pálido'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Adopta la forma de otras criaturas para atraer presas a su guarida.', 'En la oscuridad más profunda hay bestias con rostros robados de tu memoria que tratan de controlarte manipulando tus sentimientos. Conócete a ti mismo y no te dejes engañar.']
    },
    {
      nombre: "Mawlek Incubador",
      src: "../assets/media/personajes/mawlek-incubador.webp",
      width: 240,
      vida: [300],
      recompensa: ['Fragmento de Máscara'],
      ubicacion: ['Cruces Olvidados', 'Coliseo de los Insensatos', 'Hogar de Dioses'],
      descripcion: ['Una criatura feroz, aunque extremadamente social. Se vuelve agresiva si no puede relacionarse con los de su propia especie.', 'Escucho a esta bestia gritar a veces mientras merodeo las cavernas, aunque nunca he posado mis ojos en ella. ¿A quién o qué está llamando? Por lo que yo sé, sus bramidos nunca obtienen respuesta.']
    },
    {
      nombre: "Reseptaculo Roto",
      src: "../assets/media/personajes/reseptaculo-roto.webp",
      width: 180,
      vida: [525],
      recompensa: ['Alas de Monarca'],
      ubicacion: ['Cuenca Antigua', 'Hogar de Dioses'],
      descripcion: ['Cadáver destrozado, reanimado por parásitos infectados.', 'La forma de esta criatura... He visto algo similar antes. Más de una vez, incluso. Se parece un poco a los insectos de Hallownest, pero no es exactamente igual. ¿De dónde han venido estos pequeños errantes vacíos?']
    },
    {
      nombre: "Caballero Colmena",
      src: "../assets/media/personajes/caballero-colmena.webp",
      width: 240,
      vida: [800],
      recompensa: ['Sangrecolmena'],
      ubicacion: ['La Colmena'],
      descripcion: ['Protector leal de la Reina de la Colmena. No puede volar pero es feroz en combate.', 'Algunas criaturas nacen con deberes y lealtadas marcadas imborrablemente en sus mentes. Son fuertes, pero también son esclavos.']
    },
    {
      nombre: "Señor Desleal",
      src: "../assets/media/personajes/señor-desleal.webp",
      width: 180,
      vida: [800],
      recompensa: ['Acceso a la Dama Blanca'],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Cacique destituido de la tribu mantis. Decidió aceptar la infección y se volvió contra sus hermanas.', 'Yo también he sentido esa tentación. La tentación de dejar que la infección entre en mí. Sería más fuerte, más poderoso... esas ideas siguen emponzoñando mis sueños durante los momentos difíciles. Es una mentira, pero brilla tanto que puede confundir tu mente.']
    },
    {
      nombre: "Oblobble",
      src: "../assets/media/personajes/oblobble.webp",
      width: 220,
      vida: [260],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Primo mayor del obble. Conserva a su pareja de por vida, y jamás la abandona.', 'Tener una pareja a tu lado... alguien que no te dejará hasta su muerte. Curioso. Nunca ha encontrado a nadie que quiera permanecer a mi lado...']
    },
    {
      nombre: "Domador de Dioses",
      src: "../assets/media/personajes/domador-de-dioses.webp",
      width: 220,
      vida: [1100],
      recompensa: ['-'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Una guerrera veterana del Coliseo de los Insensatos. Lucha junto a las criaturas que ha entrenado.', 'Algunos cazadores entrenan a bestias para que les acompañen cuando van tras sus presas. Una vez lo intenté, pero no pude resistir la tentación de comparar la fuerza de mi compañero con la mía.']
    },
    {
      nombre: "Zote",
      src: "../assets/media/personajes/zote.webp",
      width: 90,
      vida: [200],
      recompensa: ['Recompensas de la Prueba del Guerrero'],
      ubicacion: ['Coliseo de los Insensatos'],
      descripcion: ['Se ha autoproclamado caballero. Carece de prestigio. Blande un aguijón hecho de maderarmazón al que llama «Terminavidas».', 'Existen ciertas criaturas que son tan débiles, inútiles, ineptas e irritantes que cazarlas pierde todo el interés.']
    },
    {
      nombre: "Príncipe Gris Zote",
      src: "../assets/media/personajes/principe-gris-zote.webp",
      width: 240,
      vida: ['1200 / 1500'],
      recompensa: ['300 de Esencia'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Producto de una mente obsesionada. Falto de gracia pero se vuelve más fuerte con cada derrota.', 'Amor mío, cualquier criatura que pueda mantenerse lejos de tí, que voluntariamente te deje atrás o te diga cosas desagradables... ¡Bah! ¡Pobres gusanos, no merecen ni quedarse bajo tu gloriosa sombra!']
    },
    {
      nombre: "Xero",
      src: "../assets/media/personajes/xero.webp",
      width: 220,
      vida: [200],
      recompensa: ['100 de Esencia'],
      ubicacion: ['Tierras de Reposo'],
      descripcion: ['Sueño persistente de un guerrero caído. Ejecutado por crímenes contra el rey.', 'Una vida definida por la tragedia y el triunfo. Una muerte enturbiada por la pena y los remordimientos. Un espíritu atosigado por pecados y recuerdos. Mejor deambular por el mundo que ser maldecido con la gloria.']
    },
    {
      nombre: "Gorb",
      src: "../assets/media/personajes/gorb.webp",
      width: 180,
      vida: [200],
      recompensa: ['100 de Esencia'],
      ubicacion: ['Acantilados Aulladores'],
      descripcion: ['Sueño persistente de un guerrero caído. Una misteriosa forma de vida que afirmaba contener todo el conocimiento del mundo dentro de su dilatado cerebro.', '¡Soy Gorb!']
    },
    {
      nombre: "Anciano Hu",
      src: "../assets/media/personajes/anciano-hu.webp",
      width: 170,
      vida: [250],
      recompensa: ['100 de Esencia'],
      ubicacion: ['Páramos Fungicos'],
      descripcion: ['Sueño persistente de un guerrero caído. Viajó por el mundo cuidando de los aquejados por la plaga.', 'Nunca olvides lo que una vez se perdió, pero tampoco dejes que te ate.']
    },
    {
      nombre: "Marmu",
      src: "../assets/media/personajes/marmu.webp",
      width: 180,
      vida: [200],
      recompensa: ['150 de Esencia'],
      ubicacion: ['Jardines de la Reina'],
      descripcion: ['Sueño persistente de un guerrero caído. Protector de los Jardines de la Reina.', 'Si crees en algo lo máximo que puedas, con los ojos completamente cerrados... ¡se terminará haciendo realidad!']
    },
    {
      nombre: "Sin Ojos",
      src: "../assets/media/personajes/sin-ojos.webp",
      width: 200,
      vida: [200],
      recompensa: ['200 de Esencia'],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Sueño persistente de un guerrero caído. Desapareció durante la plaga.', 'Se están acercando... Lo que tienes en tu interior... ¡Sácalo!']
    },
    {
      nombre: "Galien",
      src: "../assets/media/personajes/galien.webp",
      width: 180,
      vida: [230],
      recompensa: ['200 de Esencia'],
      ubicacion: ['Nido Profundo'],
      descripcion: ['Sueño persistente de un guerrero caído. Entrenado en las tierras salvajes que bordean el reino con la esperanza de convertirse en un caballero.', 'Un caballero no solo se esfuerza en proteger las tierras y a su gente, sino también las esperanzas y los sueños del reino.']
    },
    {
      nombre: "Markoth",
      src: "../assets/media/personajes/markoth.webp",
      width: 210,
      vida: [250],
      recompensa: ['250 de Esencia'],
      ubicacion: ['Límite del Reino'],
      descripcion: ['Sueño persistente de un guerrero caído. El único miembro de su tribu olvidada que empuñó un arma.', 'Que tus esfuerzos te lleven a algún lugar digno.']
    },
    {
      nombre: "Grimm",
      src: "../assets/media/personajes/grimm.webp",
      width: 140,
      vida: [800],
      recompensa: ['Muesca de Amuletos', 'Niño de Grimm Nivel 3'],
      ubicacion: ['Bocasucia', 'Hogar de Dioses'],
      descripcion: ['Maestro de la Compañía de Grimm', 'Por la llamada de la linterna, a través de sueños yo viajo. A consumir las llamas de un reino hecho pedazos.']
    },
    {
      nombre: "Rey Pesadilla",
      src: "../assets/media/personajes/rey-pesadilla.webp",
      width: 200,
      vida: [1500],
      recompensa: ['Niño de Grimm Nivel 4'],
      ubicacion: ['Bocasucia'],
      descripcion: ['Espectro retorcido de la llama escarlata.', 'La expansión del sueño separada en el pasado, y un reino deberá estar alejado. El rojo latente, los extremos más apagados. El corazón de la pesadilla. El sueño aterrorizado.']
    },
    {
      nombre: "Maestros de Aguijón Oro y Mato",
      src: "../assets/media/personajes/maestros-de-aguijon-oro-y-mato.webp",
      width: 240,
      vida: [2100],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Hermanos del aguijón, entrenados en combate por el gran Sabio del aguijón.', '"Dioses por trabajo y aguijón vinculados. Hermanos que al débil protejen bajo juramento. Maestros de terrenos sagrados. ¡Ayúdanos a encontrar a un Dios en nuestro intento!"']
    },
    {
      nombre: "Maestro de Pinturas Sheo",
      src: "../assets/media/personajes/maestro-de-pinturas-sheo.webp",
      width: 160,
      vida: [950],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Habilidoso y respetado maestro del aguijón. Siempre entusiasmado por aprender cosas nuevas.', '"¡Oh Dios inspirado, maestro de las artes.  Cuyos trabajos deben perdurar en el futuro. Mira más allá de nuestros corazones y mentes. Revélanos el dios más puro!" ']
    },
    {
      nombre: "Gran Sabio del Aguijón Sly",
      src: "../assets/media/personajes/gran-sabio-del-aguijon-sly.webp",
      width: 150,
      vida: [1050],
      recompensa: ['-'],
      ubicacion: ['Hogar de Dioses'],
      descripcion: ['Legendario sabio de las artes del aguijón y recientemente; mercader con algo de éxito', '"¡Sabio Dios del astuto y el audaz. Afila nuestros aguijones y las probabilidades muéstranos. Oh gran maestro, déjanos observar. A aquel aun mas grande, al más poderoso Dios!"']
    },
    {
      nombre: "Hornet",
      src: "../assets/media/personajes/hornet.webp",
      width: 220,
      vida: [225],
      recompensa: ['Alas de Monarca'],
      ubicacion: ['Sendero Verde'],
      descripcion: ['Habilidosa protectora de las ruinas de Hallownest. Empuña una aguja e hilo.', 'He visto a esta pequeña y ágil criatura. Pensé que era una presa y me abalancé sobre ella, pero, rápida como un rayo, me apuñaló con su aguijón volante y se fue disparada. ¿Podría ser... una cazadora?']
    }
  ];





  // todo -------------------------------------------------- CÓDIGO -------------------------------------------------- todo //

  public personajes: any = {};

  constructor() { };

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    sessionStorage.setItem('scroll', scrollPosition.toString());
  };

  ngAfterViewInit(): void {
    const scrollSessionStorage = sessionStorage.getItem('scroll');

    if (scrollSessionStorage !== null) {
      const scrollPosition = parseInt(scrollSessionStorage, 10);
      if (!isNaN(scrollPosition)) {
        window.scrollTo(0, scrollPosition);
      };
    };
  };

  ngOnInit(): void {
    this.listar(this.todos);
  };

  cambiarTipoPersonaje(filtro: any) {
    let filtroPersonajes;
    if (filtro == 'todos') {
      filtroPersonajes = this.todos;
    } else if (filtro == 'pacificos') {
      filtroPersonajes = this.pacificos;
    } else if (filtro == 'agresivos') {
      filtroPersonajes = this.agresivos;
    } else if (filtro == 'jefes') {
      filtroPersonajes = this.jefes;
    };
    this.listar(filtroPersonajes);
  };

  listar(filtroPersonajes: any) {
    this.personajes = filtroPersonajes;
  };

  public personajeSeleccionado(personaje: any) {
    sessionStorage.setItem('personaje', JSON.stringify(personaje))
  };

};