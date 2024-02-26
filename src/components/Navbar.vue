<script>
import Homepage from "./Homepage.vue"
import Events from "./Events.vue"
import ContactUs from "./ContactUs.vue"
import AboutUs from "./AboutUs.vue"
import Courses from "./Courses.vue"
import Library from "./Library.vue"
import Partnerships from "./Partnerships.vue"
import Alumni from "./Alumni.vue"

</script>

<template>
    <v-app-bar color="#8C2155">
        <div>
            <v-btn to="/" color="white" dark >Home</v-btn>
         </div>

         <div>
            <v-btn to="/Events" color="white" dark >Events</v-btn>
         </div>

         <div>
            <v-btn to="/Courses" color="white" dark >Courses</v-btn>
         </div>

         <div>
            <v-btn to="/Library" color="white" dark >Library</v-btn>
         </div>

        <div>
            <v-btn to="/AboutUs" color="white" dark >AboutUs</v-btn>
        </div>
        
        <div>
            <v-btn to="/ContactUs" color="white" dark >ContactUs</v-btn>
        </div>

        <div>
            <v-btn to="/Alumni" color="white" dark >Alumni</v-btn>
         </div>

        <div>
            <v-btn to="/Partnerships" color="white" dark >Partnerships</v-btn>
         </div>
       
         </v-app-bar>
</template>