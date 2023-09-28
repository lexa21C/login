<template>
    <b-container>
        <b-row>

            <div>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide
                  caption="First slide"
                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                  img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>
          
                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                  <h1>Hello world!</h1>
                </b-carousel-slide>
          
                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
          
                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template #img>
                    <img
                      class="d-block img-fluid w-100"
                      width="1024"
                      height="480"
                      src="https://picsum.photos/1024/480/?image=55"
                      alt="image slot"
                    >
                  </template>
                </b-carousel-slide>
          
                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                </b-carousel-slide>
              </b-carousel>
          
              <p class="mt-4">
                Slide #: {{ slide }}<br>
                Sliding: {{ sliding }}
              </p>
            </div>
        </b-row>
        <b-row>
            <b-card class="m-2">
                <h1>¿Qué son las Manzanas del Cuidado?</h1>
                <h2 id="que-son-las-manzanas">¿Qué son las Manzanas del Cuidado?</h2>
                <p>Las Manzanas del Cuidado son espacios de la ciudad en los que se brinda tiempo y servicios a las mujeres y a sus familias.</p>
                <p>En las Manzanas del Cuidado las cuidadoras tienen tiempo y servicios gratuitos, aquí pueden estudiar, emprender, emplearse, descansar, ejercitarse, recibir orientación y asesoría jurídica y psicológica, lavar su ropa y la de su familia en lavanderías comunitarias, todo totalmente gratis.</p>
            </b-card>
        </b-row>
        <b-row>
            <b-col cols="6">
                <b-card class="m2">
                    <h2 id="servicios-en-las-manzanas">Servicios en las Manzanas del Cuidado</h2>
                    <p>Descripción de los servicios disponibles en las Manzanas del Cuidado.</p>
                </b-card>
            </b-col>
            <b-col cols="6">
                <b-card class="m-2">
                    <h2 id="infraestructura-en-las-manzanas">Infraestructura en las Manzanas del Cuidado</h2>
                    <p>Las Manzanas son áreas de la ciudad en las que se tiene la infraestructura y servicios para atender de manera próxima y simultánea a las cuidadoras y a sus familias. Por ejemplo, en una Manzana del Cuidado las cuidadoras y quienes ellas cuidan pueden encontrar colegios, jardines, parques, hospitales, centros de atención para personas mayores.</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  </template>
  
  <script>
    export default {
      data() {
        return {
          slide: 0,
          sliding: null
        }
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
      }
    }
  </script>