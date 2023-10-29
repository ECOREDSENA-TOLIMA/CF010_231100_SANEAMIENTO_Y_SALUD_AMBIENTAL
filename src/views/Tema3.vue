<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Capa de ozono
    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Es una región que rodea el planeta y está compuesta por moléculas de ozono (O3). Se encuentra a una altitud de 15 a 50 kilómetros sobre la superficie de la Tierra y su concentración puede variar debido a factores como la altitud y las condiciones meteorológicas. Su función principal es actuar como un escudo protector que absorbe los rayos ultravioleta (UV-B) procedentes del sol, evitando que alcancen la superficie terrestre. Estos rayos UV-B pueden ser perjudiciales para la salud de los seres humanos y tienen efectos dañinos en la vida y el medio ambiente, incluyendo daños en las células vivas y el material genético.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-4.mb-4.mb-md-0
        .titulo-sexto.color-acento-contenido.offset-1
          h5 Figura 1.
          span  #[i  Ubicación de la capa de ozono]
    .row.justify-content-center.align-items-center.mb-5
      .col.desktop
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='En la figura 1 se muestra la ubicación de la capa de ozono sobre la Tierra.')
      .col.movil
        figure
          img(src='@/assets/curso/temas/tema3/img2_1.svg', alt='En la figura 1 se muestra la ubicación de la capa de ozono sobre la Tierra.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p El adelgazamiento y deterioro de la capa de ozono, conocido como el "agujero de la capa de ozono", fue descubierto en 1985 y se atribuye en gran medida a la liberación de sustancias químicas dañinas, como los clorofluorocarbonos (CFC), utilizados en productos industriales y de consumo. Esta degradación de la capa de ozono ha sido una preocupación mundial y ha llevado a la adopción de acuerdos internacionales para limitar la producción y el uso de estas sustancias. La medición de la cantidad de ozono en la atmósfera se realiza en Unidades Dobson, que representan el espesor de ozono en condiciones normales de presión y temperatura. La preservación de la capa de ozono es esencial para proteger la salud humana y el equilibrio del ecosistema global.
</template>

<script>
export default {
  name: 'Tema3',
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
