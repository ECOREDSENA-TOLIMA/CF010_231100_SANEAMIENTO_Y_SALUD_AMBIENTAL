<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Efectos a la salud humana de la contaminación atmosférica
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto(data-aos="fade-left")
            p.mb-4 Entre la  contaminación atmosférica, en particular la exposición a contaminantes como las partículas finas, se ha convertido en una seria amenaza para la salud humana. En décadas anteriores, se subestimaba su impacto en la salud, pero hoy en día se reconoce que inhalar estos contaminantes puede causar una serie de problemas de salud, tanto a corto como a largo plazo, incluso contribuyendo a la muerte prematura.
            br
            br
            p.mb-0 Los efectos de la contaminación en la salud humana varían según varios factores, como la concentración de contaminantes, sus características físicas y químicas, la cantidad inhalada, la frecuencia y duración de la exposición, factores genéticos, nivel socioeconómico, estado nutricional, edad y ubicación geográfica. Por ejemplo, las personas que viven cerca de carreteras o zonas industriales tienen más riesgo de exposición a contaminantes externos, mientras que aquellas que utilizan combustibles sólidos como el carbón para la calefacción en sus hogares enfrentan riesgos de contaminación en interiores. La exposición también está vinculada al desarrollo poblacional y al cumplimiento de las regulaciones ambientales.
      .col-lg-3(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-3(data-aos="flip-right")
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-left")
        p Las enfermedades respiratorias son especialmente afectadas por la contaminación atmosférica, y los grupos más vulnerables incluyen a los niños, cuyos sistemas inmunológicos aún se están desarrollando, y las personas mayores, que a menudo tienen enfermedades preexistentes y sistemas inmunológicos debilitados. La ubicación geográfica y la calidad del aire también desempeñan un papel fundamental en la salud de la población.
        .bloque-texto-b.color-primario
          .bloque-texto-b__texto        
            p Las partículas en suspensión, especialmente aquellas con un diámetro de 10 micrómetros o menos (PM10) y las partículas finas de menos de 2.5 micrómetros (PM2.5), son perjudiciales para la salud humana. Estas partículas pueden penetrar profundamente en los pulmones cuando se inhalan y aumentar el riesgo de desarrollar diversas enfermedades del sistema respiratorio. Algunas partículas nocivas para la salud humana incluyen:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen decorativa')
        h2.text-center PM10
        p Estas son partículas con un diámetro de menos de 10 micrómetros y pueden ser inhaladas y acumularse en el sistema respiratorio.
      .col-md.tarjeta.color-secundario.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg', alt='Imagen decorativa')
        h2.text-center PM2.5
        p Son partículas aún más finas, con un diámetro de menos de 2.5 micrómetros, y se conocen como partículas finas. Son especialmente preocupantes,  ya que pueden penetrar profundamente en los pulmones y tener un mayor impacto en la salud.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p La presencia de partículas en suspensión y sustancias contaminantes en el aire puede contribuir al desarrollo de las siguientes enfermedades respiratorias y de salud:
        .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Tabla 1.
          span  #[i  Enfermedades producidas por la contaminación atmosférica]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-right")
        .tabla-b.color-acento-botones.mb-5        
          table(border=1)
            thead(style="background-color:#FFAE7E;")
              tr
                th(colspan="2")
                  h3.text-center Enfermedades producidas por la contaminación atmosférica
            tbody
              tr
                td 
                  .row.justify-content-center.align-items-center.mb-1
                    .col-lg-8
                      figure
                        img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
                  h4.text-center Enfermedades respiratorias
                td.text-left 
                  p Asma, alergias, rinitis, neumonía, bronquitis, enfisema, tuberculosis, Enfermedad Pulmonar Obstructiva Crónica (EPOC), envejecimiento prematuro de los pulmones.
              tr
                td 
                  .row.justify-content-center.align-items-center.mb-1
                    .col-lg-8
                      figure
                        img(src='@/assets/curso/temas/tema4/img7.svg', alt='Imagen decorativa')
                  h4.text-center Enfermedades cardiovasculares
                td.text-left 
                  p Accidentes cerebrovasculares, cardiopatías isquémicas, insuficiencia cardiaca, enfermedad de las arterias coronarias, ritmos cardiacos anormales.
              tr
                td 
                  .row.justify-content-center.align-items-center.mb-1
                    .col-lg-8
                      figure
                        img(src='@/assets/curso/temas/tema4/img8.svg', alt='Imagen decorativa')
                  h4.text-center Otras enfermedades
                td.text-left 
                  p Problemas en el desarrollo cognitivo, cáncer, infertilidad.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        p Es importante controlar y reducir la exposición a estas partículas y contaminantes para proteger la salud pública y prevenir enfermedades relacionadas con la calidad del aire. Las directrices de calidad del aire de la OMS establecen valores guía para ayudar a proteger la salud de la población.
</template>

<script>
export default {
  name: 'Tema4',
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
