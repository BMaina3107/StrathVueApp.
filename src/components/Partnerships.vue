<template>
    <div id = 'homepage'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://download.services.iconscout.com/download?name=oracle&download=1&url=https%3A%2F%2Fd3sxshmncs10te.cloudfront.net%2Ficon%2Ffree%2Fsvg%2F1175131.svg%3Ftoken%3DeyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcwODY5MTE1NSwicSI6bnVsbCwiaWF0IjoxNzA4NDMxOTU1fQ__.6993de1fe72a24456a8d6218856a743a3994b59bd4dee66afe931c0e27d83028"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.pexels.com/photos/17614476/pexels-photo-17614476.jpeg?cs=srgb&dl=pexels-julio-lopez-17614476.jpg&fm=jpg&_gl=1*j2prsh*_ga*NjI4MjUwODMzLjE3MDcyMjQ3Mzg.*_ga_8JE65Q40S6*MTcwODQzOTA4My42LjEuMTcwODQzOTEwMS4wLjAuMA.."
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=boliviainteligente-wIBDrEv73xY-unsplash.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card
                                width="1200"
                                title="Oracle"
                                text="Oracle Corporation: This is a multinational computer technology corporation headquartered in Austin, Texas, USA. It specializes in developing and marketing database software and technology, cloud-engineered systems, and enterprise software products—particularly its own brands of database management systems"
                                ></v-card>
                                 <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="1200">
                                <template v-slot:title>
                                    Meta
                                </template>

                                    

                                <template v-slot:text>
                                    Meta in Internet Culture and Media: In internet culture and media, "meta" often refers to something that is self-referential or self-aware. For instance, a TV show might have a meta moment where a character acknowledges that they are in a TV show, or a meme might be meta if it references the culture of memes themselves
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="1200">
                                <v-card-item>
                                    <v-card-title>Microsoft Office</v-card-title>
                                </v-card-item>
                             <v-card-text>
                                    Microsoft is best known for its operating system, Microsoft Windows, which dominates the personal computer market. Other notable products and services developed by Microsoft include the Microsoft Office suite, which includes productivity applications such as Word, Excel, and PowerPoint; the Azure cloud computing platform; the Xbox gaming console series; and various software development tools.
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>