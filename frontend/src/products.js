const products = [
  {
    _id: '1',
    name: 'Canelloni',
    image: '/images/canelone.jpg',
    description:
      'Cannelloni (ou canelone) são um formato de macarrão cilíndrico tipicamente italiano. O produto habitualmente é consumido com recheio salgado que pode incluir queijo ricota e vegetais como o espinafre, além da carne moída. Depois é coberto por um molho que pode ser de tomate clássico ou bechamel e gratinados ao forno. Esse tipo de macarrão é vendido tanto nas versões pré-cozida quanto na que necessita de um pré-cozimento antes de ser recheado. As dimensões são aproximadamente de 8 a 10 cm de comprimento por cerca de 2 cm de diâmetro. Também são um prato tradicional da gastronomia catalã, onde são consumidos tradicionalmente no dia 26 de dezembro. ',
    category: 'massas',
    price: 18.0,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    _id: '2',
    name: 'Coca Cola 2 litros',
    image: '/images/coca-2l.jpg',
    description:
      'Coca-Cola é um refrigerante carbonado vendido em lojas, restaurantes, mercados e máquinas de venda automática em todo o mundo. Ele é produzido pela The Coca-Cola Company, sediada em Atlanta, Estados Unidos, e é muitas vezes referido apenas como Coca-Cola (a marca registrada da empresa Coca-Cola nos Estados Unidos desde 27 de março de 1944). Originalmente concebida como um remédio patenteado quando foi inventada no final do século XIX por John Pemberton, a Coca-Cola foi comprada pelo empresário Asa Griggs Candler, cujas táticas publicitárias levaram a bebida ao domínio do mercado de refrigerantes no mundo ao longo do século XX.',
    category: 'bebidas',
    price: 10.0,
    countInStock: 20,
    rating: 5,
    numReviews: 6,
  },
  {
    _id: '3',
    name: 'Coca Cola lata',
    image: '/images/cocaLata.jpg',
    description:
      'Coca-Cola é um refrigerante carbonado vendido em lojas, restaurantes, mercados e máquinas de venda automática em todo o mundo. Ele é produzido pela The Coca-Cola Company, sediada em Atlanta, Estados Unidos, e é muitas vezes referido apenas como Coca-Cola (a marca registrada da empresa Coca-Cola nos Estados Unidos desde 27 de março de 1944). Originalmente concebida como um remédio patenteado quando foi inventada no final do século XIX por John Pemberton, a Coca-Cola foi comprada pelo empresário Asa Griggs Candler, cujas táticas publicitárias levaram a bebida ao domínio do mercado de refrigerantes no mundo ao longo do século XX.',
    category: 'bebidas',
    price: 6.0,
    countInStock: 20,
    rating: 5,
    numReviews: 8,
  },
  {
    _id: '4',
    name: 'Fanta Uva 2 litros',
    image: '/images/fantaUva-2l.jpg',
    description:
      'Fanta é uma marca de refrigerantes, que detém uma linha variada de produtos e que pertence à The Coca-Cola Company. Criada e lançada na Alemanha Nazi, durante a Segunda Guerra Mundial, atualmente é comercializada em 188 países.',
    category: 'bebidas',
    price: 10.0,
    countInStock: 30,
    rating: 3.5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Fanta Uva lata',
    image: '/images/fantaUvaLata.jpeg',
    description:
      'Fanta é uma marca de refrigerantes, que detém uma linha variada de produtos e que pertence à The Coca-Cola Company. Criada e lançada na Alemanha Nazi, durante a Segunda Guerra Mundial, atualmente é comercializada em 188 países.',
    category: 'bebidas',
    price: 6.0,
    countInStock: 10,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Fettuccine',
    image: '/images/fettuccine.jpg',
    description:
      'Fettuccine (pronunciado [fettutˈtʃiːne]; literalmente "pequenas fitas" em italiano; singular: Fettuccina) é um tipo de massa popular na culinária romana e toscana. É um macarrão achatado feito de farinha e ovos (em geral, um ovo para cada 100 g de farinha), mais largo ou similar ao tagliatelle típico de Bologna. Normalmente, é acompanhado ao molho sugo d´umido (ragu) and ragù di pollo (ragu de frango). ',
    category: 'massas',
    price: 18.0,
    countInStock: 6,
    rating: 3.5,
    numReviews: 4,
  },
  {
    _id: '7',
    name: 'Gnocchi',
    image: '/images/gnocci.jpeg',
    description:
      'O nhoque ou inhoque, também conhecidos no termo do italiano gnocco, plural gnocchi [ˈɲɔkki], é uma massa alimentícia preparada a base da mistura de batata, ou macaxeira com farinha de trigo, sendo um prato típico da culinária da Itália, que pode ser servido com os molhos: Sugo, bolonhesa ou branco.',
    category: 'massas',
    price: 18.0,
    countInStock: 5,
    rating: 4.5,
    numReviews: 10,
  },
  {
    _id: '8',
    name: 'Guaraná Antartica 2 litros',
    image: '/images/guarana-2l.jpeg',
    description:
      'Guaraná Antarctica [nota 1] é um refrigerante brasileiro que foi lançado no Brasil em 18 de agosto de 1921, pela então Companhia Antarctica Paulista, com o nome de Guaraná Champagne Antarctica, passando a ser a primeira marca a comercializar este tipo de refrigerante. Com o sucesso e popularidade da bebida, a Coca-Cola acabou lançando uma marca também com sabor de guaraná. Atualmente, a marca pertence à AmBev e encontra-se entre as quinze marcas de refrigerantes mais vendidas no mundo.',
    category: 'bebidas',
    price: 10.0,
    countInStock: 10,
    rating: 4.5,
    numReviews: 17,
  },
  {
    _id: '9',
    name: 'Guaraná Antartica lata',
    image: '/images/guaranaLata.jpeg',
    description:
      'Guaraná Antarctica [nota 1] é um refrigerante brasileiro que foi lançado no Brasil em 18 de agosto de 1921, pela então Companhia Antarctica Paulista, com o nome de Guaraná Champagne Antarctica, passando a ser a primeira marca a comercializar este tipo de refrigerante. Com o sucesso e popularidade da bebida, a Coca-Cola acabou lançando uma marca também com sabor de guaraná. Atualmente, a marca pertence à AmBev e encontra-se entre as quinze marcas de refrigerantes mais vendidas no mundo.',
    category: 'bebidas',
    price: 6.0,
    countInStock: 15,
    rating: 4.5,
    numReviews: 27,
  },
  {
    _id: '10',
    name: 'Lasagna',
    image: '/images/LASANHA.jpg',
    description:
      'Lasanha (lasagne em italiano) é tanto um tipo de massa alimentícia formada por fitas largas, como também um prato, por vezes chamado lasanha ao forno, feito com essas fitas colocadas em camadas, e entremeadas com recheio (queijo, carne moída ou outros) e molho. A palavra lasanha provém da grega "lasanon" que significa pote de quatro. O termo foi depois emprestado pelos romanos como "lasanum" para significar pote de cozinhar. Os italianos usaram a palavra para definir o prato onde, hoje se sabe, era feita a Lasanha. Apesar de tradicionalmente se acreditar que a lasanha é um prato tipicamente originado na Itália, tem-se evidências de que há um prato muito similar conhecido como "loseyns" (lê-se lasan), comido na corte do Rei Ricardo II no século XIV. Esta receita também figurou no primeiro livro de receitas da Inglaterra. A lasanha foi primeiro documentada no século XIII, quando foi usado num prato às camadas, esta versão mais antiga não incluia tomate, pois este ainda não tinha sido descoberto pelos Europeus. ',
    category: 'massas',
    price: 18.0,
    countInStock: 25,
    rating: 5,
    numReviews: 30,
  },
  {
    _id: '11',
    name: 'Pepsi 2 litros',
    image: '/images/pepsi-2l.jpg',
    description:
      'O produto que deu origem à marca de refrigerantes Pepsi-Cola foi criado no ano de 1893, no estado da Carolina do Norte nos Estados Unidos. Seu criador, o farmacêutico Caleb Davis Bradham, formulou um medicamento inicialmente sugerido para combater a dispepsia, uma doença causada pela falta da enzima pepsina no organismo, dando o nome de Brad´s Drink (bebida de Brad). Em pouco tempo, o produto começou a ser procurado, não como um medicamento, mas uma iguaria, fato que levou, no dia 24 de agosto de 1898, a Brad’s Drink a se chamar oficialmente Pepsi-Cola, numa referência direta ao primeiro propósito do até então medicamento, isto é, o de combater a dispepsia através de sua ingestão, auxiliando no controle da quantidade do ácido no estômago, e a noz-de-cola, um dos ingredientes principais que davam sabor ao xarope.',
    category: 'bebidas',
    price: 10.0,
    countInStock: 15,
    rating: 5,
    numReviews: 33,
  },
  {
    _id: '12',
    name: 'Pepsi lata',
    image: '/images/pepsiLata.jpeg',
    description:
      'O produto que deu origem à marca de refrigerantes Pepsi-Cola foi criado no ano de 1893, no estado da Carolina do Norte nos Estados Unidos. Seu criador, o farmacêutico Caleb Davis Bradham, formulou um medicamento inicialmente sugerido para combater a dispepsia, uma doença causada pela falta da enzima pepsina no organismo, dando o nome de Brad´s Drink (bebida de Brad). Em pouco tempo, o produto começou a ser procurado, não como um medicamento, mas uma iguaria, fato que levou, no dia 24 de agosto de 1898, a Brad’s Drink a se chamar oficialmente Pepsi-Cola, numa referência direta ao primeiro propósito do até então medicamento, isto é, o de combater a dispepsia através de sua ingestão, auxiliando no controle da quantidade do ácido no estômago, e a noz-de-cola, um dos ingredientes principais que davam sabor ao xarope.',
    category: 'bebidas',
    price: 6.0,
    countInStock: 35,
    rating: 5,
    numReviews: 22,
  },
  {
    _id: '13',
    name: 'Raviolli',
    image: '/images/ravioli.jpg',
    description:
      'O ravioli (plural de raviolos) são pequenos pastéis de massa feita com farinha de trigo e ovo, recheadas com carne, peixe, vegetais ou queijo e cozidos em algum tipo de molho, típicos da culinária da Itália. Quando se usa a palavra no singular, normalmente refere um pastel grande, preparado de maneira semelhante aos pequenos mas com uma gema de ovo inteira.',
    category: 'massas',
    price: 18.0,
    countInStock: 5,
    rating: 4.1,
    numReviews: 4,
  },
  {
    _id: '14',
    name: 'Rondelli',
    image: '/images/rondelli.jpg',
    description:
      'O rondelli é um prato de origem incerta e o significado do nome é algo como “redondo, perfeito e completo”, em tradução livre do latim. Esse é um alimento que é composto por uma massa enrolada com um recheio, que pode ser feito com diversos itens e também pode levar um molho, ou seja, esse é o rocambole das massas! ',
    category: 'massas',
    price: 18.0,
    countInStock: 6,
    rating: 4.9,
    numReviews: 7,
  },
  {
    _id: '15',
    name: 'Soda Limonada 2 litros',
    image: '/images/soda-2l.jpeg',
    description:
      'O refrigerante Soda Limonada Antarctica foi produzido pela primeira vez em 1912, pela então “Companhia Antarctica Paulista”. Desde então é o carro-chefe da empresa na produção de refrigerantes de sabor limão. No ano de 1989 foi lançada a sua versão Diet. Em 1999 com a fusão das empresas Companhia Antarctica Paulista e a Companhia Cervejaria Brahma, o refrigerante Soda Limonada Antarctica passa a ser produzido pela Companhia de Bebidas das Américas (AmBev). Em 2002, toda a linha de refrigerantes da AmBev passa por reformulações, e o nome `Soda Limonada Antarctica` dá lugar a `Soda Antarctica`.',
    category: 'bebidas',
    price: 10.0,
    countInStock: 16,
    rating: 5,
    numReviews: 10,
  },
  {
    _id: '16',
    name: 'Soda Limonada lata',
    image: '/images/sodaLata.jpeg',
    description:
      'O refrigerante Soda Limonada Antarctica foi produzido pela primeira vez em 1912, pela então “Companhia Antarctica Paulista”. Desde então é o carro-chefe da empresa na produção de refrigerantes de sabor limão. No ano de 1989 foi lançada a sua versão Diet. Em 1999 com a fusão das empresas Companhia Antarctica Paulista e a Companhia Cervejaria Brahma, o refrigerante Soda Limonada Antarctica passa a ser produzido pela Companhia de Bebidas das Américas (AmBev). Em 2002, toda a linha de refrigerantes da AmBev passa por reformulações, e o nome `Soda Limonada Antarctica` dá lugar a `Soda Antarctica`.',
    category: 'bebidas',
    price: 6.0,
    countInStock: 26,
    rating: 5,
    numReviews: 16,
  },
]

export default products