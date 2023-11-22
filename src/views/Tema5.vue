<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Desarrollo sostenible
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-right")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El desarrollo sostenible se refiere a la búsqueda de progreso y crecimiento que no ponga en peligro la satisfacción de las necesidades de la sociedad actual sin comprometer la capacidad de las futuras generaciones para satisfacer sus propias necesidades. Para lograr un desarrollo sostenible, se requiere una combinación de factores, incluyendo el desarrollo económico, la reducción de la pobreza, la protección del medio ambiente y la inclusión social.
        br
        br
        p En 2015, los líderes mundiales, miembros de las Naciones Unidas, establecieron 17 Objetivos de Desarrollo Sostenible (ODS) que representan una hoja de ruta global para abordar los desafíos más apremiantes y mejorar la calidad de vida de las personas en todo el mundo. Estos ODS se agrupan en cinco elementos clave: personas, planeta, prosperidad, paz y alianzas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p Se han observado avances positivos en varios de estos objetivos, como la reducción de la pobreza, la disminución de la mortalidad infantil, el aumento del acceso a la energía eléctrica y la protección de zonas marinas. También se han alcanzado acuerdos internacionales significativos, como el Acuerdo de París sobre el cambio climático.
        p Sin embargo, persisten desafíos que requieren mayor atención, como la protección de los ecosistemas, el aumento del nivel del mar, la acidificación de los océanos, el cambio climático y la pérdida de biodiversidad. Además, aspectos sociales como la erradicación de la pobreza, la igualdad de género, la educación de calidad y la atención a personas con discapacidad avanzan más lentamente y requieren esfuerzos continuos.
        p Los 17 ODS abordan una amplia gama de cuestiones, desde la erradicación de la pobreza y el hambre hasta la acción climática, la vida submarina y la paz y justicia. La colaboración global y el compromiso de gobiernos, sociedad civil y sector privado son fundamentales para alcanzar estos objetivos y construir un futuro sostenible para todos. Estos objetivos son:

    .row.justify-content-center      
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Fin de la pobreza.        
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img11.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-center Reducción de las desigualdades.

    .row.justify-content-center      
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Hambre cero.
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img12.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-center Ciudades y comunidades sostenibles.
    
    .row.justify-content-center      
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img4.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Salud y bienestar.        
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img13.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Producción y consumo responsable.
    .row.justify-content-center      
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img5.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Educación de calidad.       
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img14.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Acción por el clima.
    .row.justify-content-center      
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img6.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Igualdad de género.       
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img15.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Vida submarina.
    .row.justify-content-center
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img7.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Agua limpia y saneamiento.      
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img16.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Vida de ecosistemas terrestres.
    .row.justify-content-center
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img8.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-let Energía asequible y no contaminante.
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img17.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Paz, justicia e instituciones sólidas.
    .row.justify-content-center
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Trabajo decente y crecimiento económico.
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img18.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Alianza para lograr los objetivos.
    .row.justify-content-center
      .col-lg-5
        hr
        .row.justify-content-left.align-items-center
          .col-lg-3.col-6(data-aos="flip-right")
            figure
              img(src='@/assets/curso/temas/tema5/img10.svg', alt='Imagen decorativa')
          .col-lg-9.col-6(data-aos="fade-left")
            h4.text-left Industria, innovación e infraestructura.
      .col-lg-5

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
