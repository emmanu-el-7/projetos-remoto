import { NavLink } from 'react-router-dom'
import Logo from '../images/Captura de tela 2023-09-30 111023.png'
import Navbar from '../components/Navbar'
import './About.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#b2ebf9' }}>
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
        <div>
          <h1 className='title'>Sobre a Hardware Heaven</h1>
          <p className='content'>
            Bem-vindo à Hardware Heaven, sua porta de entrada para o mundo
            empolgante da tecnologia e hardware de ponta! Desde o nosso início
            humilde até o que somos hoje, gostaríamos de compartilhar nossa
            história com você.
          </p>
          <h2 className='title'>O Nosso Começo</h2>
          <p className='content'>
            Tudo começou com uma paixão compartilhada por tecnologia e inovação.
            Em uma pequena garagem nos arredores da cidade, um grupo de
            entusiastas de hardware se reuniu para compartilhar ideias e buscar
            as últimas novidades em dispositivos e componentes. Era um momento
            em que os computadores pessoais estavam se tornando mais acessíveis,
            mas a busca por informações confiáveis e produtos de qualidade ainda
            era um desafio.
          </p>
          <h2 className='title'>A Jornada</h2>
          <p className='content'>
            Com determinação e compromisso, transformamos essa paixão em um
            negócio. A Hardware Heaven nasceu da crença de que todos deveriam
            ter acesso à tecnologia de alta qualidade, seja para fins
            profissionais ou pessoais. Ao longo dos anos, crescemos e expandimos
            nossa oferta de produtos, mantendo um compromisso inabalável com a
            excelência e a satisfação do cliente.
          </p>
          <h2 className='title'>Nossa Missão</h2>
          <p className='content'>
            Na Hardware Heaven, nossa missão é simplificar a vida dos amantes da
            tecnologia e entusiastas de hardware. Queremos fornecer a você os
            melhores produtos, informações e suporte para que você possa
            aproveitar ao máximo suas aventuras tecnológicas. Nosso compromisso
            com a qualidade, inovação e atendimento ao cliente é o que nos
            diferencia.
          </p>
          <h2 className='title'>O Que Oferecemos</h2>
          <p className='content'>
            Em nossa loja virtual, você encontrará uma ampla gama de produtos de
            hardware, desde componentes de alta performance até acessórios
            úteis. Trabalhamos com as melhores marcas e fabricantes para
            garantir que você tenha acesso aos produtos mais recentes e
            confiáveis do mercado. Além disso, nosso blog e recursos
            educacionais estão disponíveis para ajudá-lo a tomar decisões
            informadas e aprender mais sobre o mundo da tecnologia.
          </p>
          <h2 className='title'>Junte-se a Nós</h2>
          <p className='content'>
            Agradecemos por fazer parte da nossa jornada. Na Hardware Heaven,
            não se trata apenas de vender produtos, mas de construir uma
            comunidade de entusiastas que compartilham a mesma paixão pela
            tecnologia. Estamos ansiosos para continuar crescendo e inovando
            junto com você. Seja bem-vindo à Hardware Heaven - O seu destino
            para hardware de qualidade e conhecimento tecnológico. Explore,
            aprenda e experimente o futuro conosco.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
