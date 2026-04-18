-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11/04/2024 às 15:33
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pizzariadelagattito`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `subtitulo` varchar(255) NOT NULL,
  `imagem` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `banner`
--

INSERT INTO `banner` (`id`, `titulo`, `subtitulo`, `imagem`) VALUES
(2, 'Pizzas únicas', 'Onde a felicidade tem sabor de pizza!', '04-04-2024-14-14-30-3.png'),
(3, 'Nossas pizzas são tão boas ', 'que vão te fazer miar de prazer!	', '04-04-2024-14-05-28-2.png'),
(6, 'Pizzaria de la Gattito', 'Miau-nha pizzaria favorita!	', '04-04-2024-14-16-38-1.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `config`
--

CREATE TABLE `config` (
  `id` int(11) NOT NULL,
  `nome` varchar(80) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereco` varchar(100) NOT NULL,
  `logo` varchar(80) NOT NULL,
  `icone` varchar(80) NOT NULL,
  `instagram` varchar(80) NOT NULL,
  `twitter` varchar(80) NOT NULL,
  `linkedin` varchar(80) NOT NULL,
  `facebook` int(80) NOT NULL,
  `youtube` int(80) NOT NULL,
  `cor` varchar(20) NOT NULL,
  `titulo_servicos` varchar(50) NOT NULL,
  `subtitulo_servicos` varchar(255) NOT NULL,
  `titulo_trabalhos` varchar(50) NOT NULL,
  `subtitulo_trabalhos` varchar(255) NOT NULL,
  `titulo_equipe` varchar(50) NOT NULL,
  `subtitulo_equipe` varchar(255) NOT NULL,
  `titulo_contato` varchar(50) NOT NULL,
  `subtitulo_contato` varchar(255) NOT NULL,
  `texto_rodape` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `config`
--

INSERT INTO `config` (`id`, `nome`, `email`, `senha`, `telefone`, `endereco`, `logo`, `icone`, `instagram`, `twitter`, `linkedin`, `facebook`, `youtube`, `cor`, `titulo_servicos`, `subtitulo_servicos`, `titulo_trabalhos`, `subtitulo_trabalhos`, `titulo_equipe`, `subtitulo_equipe`, `titulo_contato`, `subtitulo_contato`, `texto_rodape`) VALUES
(3, 'Pizzaria De La Gattito', 'pizza&gatos@gmail.com', '123', '(11) 98765-4321', 'Rua Seu Jorge 1223º', 'logo.png', 'icone.png', '0', 'https://twitter.com/juanpbg2007', 'https://www.linkedin.com/in/joão-gimenes-4359312b3/', 0, 0, '#D32F2F', 'Serviços ', 'Confira nossos serviços ', 'Trabalhos', 'Nossa equipe trabalha com a precisão de um miau-quinista, garantindo que cada pizza seja uma obra de arte gastronômica!', 'Equipe', 'Nossa equipe é unida como uma miau-nidão, trabalhando juntos para criar experiências culinárias memoráveis em cada pizza!', 'Contate-nos', 'Entre em contato conosco e deixe seu miado registrado!', 'Empresa meramente ilustrativa, por favor não leve a serio o assunto retratado aqui. ');

-- --------------------------------------------------------

--
-- Estrutura para tabela `equipe`
--

CREATE TABLE `equipe` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `imagem` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `equipe`
--

INSERT INTO `equipe` (`id`, `nome`, `cargo`, `imagem`) VALUES
(1, 'Andrey Hiago', 'Chef', '04-04-2024-16-55-07-imagem_2024-04-04_165506660.png'),
(2, 'Gustavo Lenni ', 'Atendente ', '04-04-2024-16-55-38-imagem_2024-04-04_165536936.png'),
(3, 'Heitor Aredes ', 'Designer', '04-04-2024-16-57-33-imagem_2024-04-04_165733251.png'),
(4, 'Felipe Luz', 'Degustador ', '04-04-2024-16-58-52-imagem_2024-04-04_165852029.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `servicos`
--

CREATE TABLE `servicos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `video` varchar(100) NOT NULL,
  `exibir` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `servicos`
--

INSERT INTO `servicos` (`id`, `titulo`, `descricao`, `imagem`, `video`, `exibir`) VALUES
(4, 'Delivery', '<span style=\"white-space-collapse: preserve; background-color: rgb(255, 255, 255);\"><font color=\"#000000\" style=\"\" face=\"arial\">Saboreie o conforto de uma refeição deliciosamente felina onde quer que esteja com o nosso serviço de delivery. Com o toque de um botão, leve o sabor artesanal das nossas pizzas diretamente para a sua porta. Não importa se você está em casa, no trabalho ou em um passeio pela cidade, o nosso meow-delivery está pronto para atender aos seus desejos gastronômicos, proporcionando uma experiência perfeita em cada mordida. Peça agora e deixe que o sabor felino invada o seu dia!</font></span><br>', '11-04-2024-08-41-20-imagem_2024-04-11_084118743.png', 'https://www.youtube.com/embed/67XkI4JgOjE?si=dMhgUBwhHvIH1PJc', 'Imagem'),
(5, 'Pizzas únicas', '<span style=\"white-space-collapse: preserve; background-color: rgb(255, 255, 255);\"><font color=\"#000000\" style=\"\" face=\"arial\">Na Pizzaria De La Gattito, oferecemos uma experiência gastronômica verdadeiramente única, onde cada pizza é uma obra-prima de sabor felino. Nossos talentosos chefs combinam ingredientes frescos e selecionados cuidadosamente para criar uma variedade de sabores que vão além do convencional. Das clássicas combinações italianas aos sabores inovadores com um toque gatuno, cada pizza é uma aventura culinária por si só. Venha explorar os sabores únicos que só encontrará aqui e deixe-se levar por uma experiência gustativa perfeita.</font></span>', '11-04-2024-08-44-11-imagem_2024-04-11_084410463.png', 'https://www.youtube.com/embed/q8Oz7NQjOyI?si=baQbl4sGuxepYha5', 'Vídeo'),
(6, 'Chefs únicos ', '<span style=\"white-space-collapse: preserve; background-color: rgb(255, 255, 255);\"><font color=\"#000000\" style=\"\" face=\"arial\">Na Pizzaria De La Gattito, nossa equipe de chefs é tão única quanto nossos clientes. Com um talento especial e uma paixão compartilhada por criar experiências gastronômicas memoráveis, nossos chefs são verdadeiros mestres culinários, cada um com sua própria personalidade felina. Com suas habilidades excepcionais e criatividade ilimitada, eles transformam os ingredientes mais simples em verdadeiras obras-primas gourmet. Além disso, nossos chefs compartilham uma conexão especial com nossos amigos de quatro patas - os gatos! Cada um deles traz um toque de charme felino à sua culinária, garantindo que cada prato tenha um toque especial de amor e dedicação.</font></span>', '11-04-2024-08-42-32-imagem_2024-04-11_084232115.png', '', 'Imagem');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sobre`
--

CREATE TABLE `sobre` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `subtitulo` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `video` varchar(100) NOT NULL,
  `exibir` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `sobre`
--

INSERT INTO `sobre` (`id`, `titulo`, `subtitulo`, `descricao`, `imagem`, `video`, `exibir`) VALUES
(1, 'Sobre', 'O que fazemos?', '<blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><div style=\"text-align: justify;\"><span style=\"white-space-collapse: preserve; background-color: rgb(255, 255, 255);\"><font style=\"\" color=\"#000000\" face=\"arial\">Na Pizzaria De La Gattito, nossa paixão pela autêntica culinária italiana se reflete em cada fatia que servimos. Com uma combinação de ingredientes frescos, massas artesanais e molhos caseiros, buscamos proporcionar uma experiência gastronômica única para nossos clientes. Desde o momento em que você entra em nossa pizzaria, é recebido calorosamente por nossa equipe dedicada, pronta para ajudá-lo a explorar nosso menu diversificado e encontrar a pizza perfeita para satisfazer seu paladar. Nossa missão é criar momentos memoráveis em torno da mesa, onde amigos e famílias possam se reunir para compartilhar não apenas uma refeição, mas também risadas e conversas animadas. Na Pizzaria De La Gattito, cada pedaço é uma obra de arte culinária, preparada com amor e cuidado para garantir que sua experiência seja verdadeiramente deliciosa.</font></span></div></blockquote>', '22-03-2024-16-45-23-Design-sem-nome-(1).png', 'https://www.youtube.com/embed/wU0DH7rRDhM?si=69rhb0q5BJEfnaJB', 'Vídeo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `trabalhos`
--

CREATE TABLE `trabalhos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `video` varchar(100) NOT NULL,
  `exibir` varchar(20) NOT NULL,
  `link` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `trabalhos`
--

INSERT INTO `trabalhos` (`id`, `titulo`, `descricao`, `imagem`, `video`, `exibir`, `link`) VALUES
(5, 'Persa Suprema', '<p style=\"border: 0px solid rgb(227, 227, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; margin: 1.25em 0px; white-space-collapse: preserve;\"><span style=\"background-color: rgb(255, 255, 255);\"><font color=\"#000000\" style=\"\" face=\"arial\">Uma verdadeira obra-prima culinária que combina sabores sofisticados em uma explosão de sabor. Inspirada na elegância e requinte da raça de gatos persa, esta pizza é uma verdadeira celebração gastronômica.</font></span></p><p style=\"border: 0px solid rgb(227, 227, 227); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(69,89,164,.5); --tw-ring-offset-shadow: 0 0 transparent; --tw-ring-shadow: 0 0 transparent; --tw-shadow: 0 0 transparent; --tw-shadow-colored: 0 0 transparent; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; margin: 1.25em 0px 0px; white-space-collapse: preserve;\"><span style=\"background-color: rgb(255, 255, 255);\"><font color=\"#000000\" style=\"\" face=\"arial\">Cada ingrediente é escolhido com dedicação e cuidado, combinando harmoniosamente para criar uma experiência gastronômica única. Esta pizza é uma verdadeira celebração de sabores refinados e uma homenagem à beleza e elegância dos gatos persas.</font></span></p>', '11-04-2024-10-22-00-Design-sem-nome.png', '', 'Imagem', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `config`
--
ALTER TABLE `config`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `sobre`
--
ALTER TABLE `sobre`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `trabalhos`
--
ALTER TABLE `trabalhos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `config`
--
ALTER TABLE `config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `equipe`
--
ALTER TABLE `equipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `sobre`
--
ALTER TABLE `sobre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `trabalhos`
--
ALTER TABLE `trabalhos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
