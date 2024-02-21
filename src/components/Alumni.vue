<template>
    <div id = 'alumni'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="https://images.pexels.com/photos/8106679/pexels-photo-8106679.jpeg?cs=srgb&dl=pexels-karolina-grabowska-8106679.jpg&fm=jpg&_gl=1*1t0a6lc*_ga*NjI4MjUwODMzLjE3MDcyMjQ3Mzg.*_ga_8JE65Q40S6*MTcwODQzNjUyMS41LjEuMTcwODQzNjg0MC4wLjAuMA.."
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=rut-miit-hpRGrfOIybc-unsplash.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="https://images.pexels.com/photos/7972719/pexels-photo-7972719.jpeg?cs=srgb&dl=pexels-george-pak-7972719.jpg&fm=jpg&_gl=1*1g85g86*_ga*NjI4MjUwODMzLjE3MDcyMjQ3Mzg.*_ga_8JE65Q40S6*MTcwODQzNjUyMS41LjEuMTcwODQzNjYwNy4wLjAuMA.."
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
                                title="Who is an Alumni?"
                                subtitle="What it is to be an Alumni"
                                text="Being an alumni typically means that you have graduated from a particular school, college, or university. As an alumni, you are part of a network of individuals who have also completed their studies at the same institution. Alumni often stay connected with their alma mater through events, networking opportunities, and supporting current students. Many institutions have alumni associations that facilitate communication and engagement among graduates. Being an alumni can provide various benefits, including access to resources, job opportunities, and a sense of belonging to a community of fellow graduates"
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="1200">
                                <template v-slot:title>
                                    How to be an Alumni?
                                </template>

                                <template v-slot:subtitle>
                                    What are the Do's & Dont's ?
                                </template>

                                <template v-slot:text>
                                    To become an alumni of a university, you typically need to have completed a degree or program at that university. Here are the general steps:

Complete a Degree Program: Enroll in and successfully complete a degree program at the university. This could be an undergraduate degree, graduate degree, or professional degree.

Graduate: Fulfill all the requirements for your degree program and officially graduate from the university.

Stay Connected: Many universities automatically consider you an alumni after you graduate, but it's important to stay connected. Update your contact information with the alumni association of the university and subscribe to any alumni newsletters or communications.

Engage with Alumni Activities: Participate in alumni events, reunions, and networking opportunities. Many universities have alumni associations that organize events and activities for graduates to stay connected with each other and with the university.

Support the University: Consider giving back to your alma mater through donations, volunteering, or mentoring programs. Supporting your university helps future students and strengthens the university community.

Stay Informed: Keep up-to-date with university news, developments, and opportunities. Many universities offer benefits and services to their alumni, such as career services, library access, and discounts on continuing education programs.

By following these steps and staying engaged with your university community, you can become an active and valued alumni member
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="1200">
                                <v-card-item>
                                    <v-card-title>Benefits of being an Alumni</v-card-title>

                                    <v-card-subtitle>Is it really worth it?</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Being an alumni offers numerous benefits, including:

Networking Opportunities: Alumni often have access to exclusive networking events, online platforms, and alumni directories where they can connect with fellow graduates. These connections can be invaluable for career advancement, mentorship, and professional opportunities.

Career Support: Many universities and colleges offer career services to their alumni, including job boards, resume assistance, interview preparation, and career counseling. These resources can help alumni navigate career transitions and achieve their professional goals.

Continued Learning: Some institutions provide alumni with access to online courses, workshops, and seminars, allowing them to continue their education and stay updated on developments in their field.

Alumni Discounts: Alumni may be eligible for discounts on a variety of products and services, including insurance, travel, entertainment, and continuing education programs.

Pride and Recognition: Being an alumni often comes with a sense of pride and belonging to a community. Alumni may receive recognition for their achievements and contributions to their alma mater, further enhancing their professional reputation.

Access to Facilities: Many universities offer alumni access to campus facilities such as libraries, gymnasiums, and recreational centers. This can be especially beneficial for alumni who live near their alma mater or visit the area frequently.

Philanthropic Opportunities: Alumni often have the opportunity to give back to their alma mater through donations, volunteering, or participating in fundraising events. Supporting their university or college can help future generations of students and strengthen the institution's reputation.

Overall, being an alumni can provide a wide range of benefits that contribute to personal and professional growth, lifelong learning, and a sense of connection to one's educational institution.
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