<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=naassom-azevedo-Q_Sei-TqSlc-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=priscilla-du-preez-XkKCui44iM0-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=antenna-cw-cj_nFa14-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=marvin-meyer-SYTO3xs06fU-unsplash.jpg"
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
                title="Student Life"
                subtitle="Living standards of the students"
                text="University student life can be incredibly diverse and dynamic, varying greatly depending on factors like the location of the university, the individual's course of study, their personal interests, and cultural background. However, there are some common experiences and aspects of university student life that many students can relate to:

Academic Pursuits: University students spend a significant portion of their time attending classes, studying, completing assignments, and preparing for exams. The academic workload can vary depending on the course of study and the level of difficulty.

Social Life: University is a time for meeting new people and forming friendships that can last a lifetime. Socializing may happen through clubs, student organizations, dormitories, or shared interests. Parties, events, and gatherings are also common parts of university social life.

Independence and Responsibility: 

For many students, university is the first time they are away from home and living independently. This newfound freedom comes with increased responsibility for managing finances, maintaining a healthy lifestyle, and making important decisions about their future.

Extracurricular Activities: Many students participate in extracurricular activities such as sports teams, cultural clubs, volunteer organizations, or student government. These activities provide opportunities for personal growth, skill development, and building a strong resume.

Exploration and Self-Discovery: University is a time for exploring new ideas, interests, and perspectives. Students may take courses outside of their major, participate in research projects, or study abroad to broaden their horizons and discover new passions.

Challenges and Stress: Balancing academic responsibilities, social activities, part-time jobs, and personal life can be challenging and stressful for many students. Learning to manage time effectively and seek support when needed is an important part of navigating university life.

Career Preparation:University is also a time for preparing for future careers through internships, co-op programs, career fairs, and networking opportunities. Many universities offer resources such as career counseling and workshops to help students explore career options and develop job-search skills.

Overall, university student life is a multifaceted experience that encompasses academic, social, personal, and professional development. It's a time of growth, exploration, and self-discovery that lays the foundation for future success and fulfillment"
              ></v-card>

              <div class="mt-4 text-subtitle-2">With slots</div>

              <v-card width="1200">
                <template v-slot:title> Accomodation in Strathmore </template>

                <template v-slot:subtitle> State of the art accommodation </template>

                <template v-slot:text> It's fantastic to hear that you're looking for wonderful school accommodations! Finding the right place to live during your educational journey can greatly enhance your overall experience. Here are some tips for finding excellent school accommodations:

Start Early: Begin your search for accommodations as soon as possible, preferably several months before the start of the school term. This gives you more options and reduces the chance of settling for something less than ideal.

Consider Your Budget: Determine how much you can afford to spend on accommodation each month. Factor in not only rent but also utilities, groceries, transportation, and other expenses.

Location, Location, Location: Look for accommodations that are conveniently located near your school campus, public transportation, grocery stores, and other essential amenities. This can save you time and money on commuting.

Safety and Security: Prioritize safety when choosing accommodations. Research crime rates in the area and look for features like secure locks, well-lit pathways, and possibly security cameras or onsite security personnel.

Check Reviews: Look for reviews of potential accommodations online from current or past residents. Pay attention to comments about cleanliness, maintenance, noise levels, and the responsiveness of the landlord or property management.

Visit in Person: If possible, schedule a visit to potential accommodations before making a decision. This allows you to inspect the property firsthand, ask questions, and get a feel for the neighborhood.

Roommate Compatibility: If you're considering shared accommodations, make sure you're compatible with your potential roommates in terms of lifestyle, habits, and expectations. Clear communication and mutual respect are key to a harmonious living arrangement.

Read the Lease Carefully: Before signing any rental agreement, thoroughly read and understand all terms and conditions. Pay attention to details such as lease duration, rent payment schedule, maintenance responsibilities, and any restrictions or rules.

Utilities and Amenities: Inquire about what utilities are included in the rent (e.g., water, electricity, internet) and what amenities are available (e.g., laundry facilities, parking, gym, communal spaces).

Flexibility: Keep an open mind and be flexible in your search. You might not find the perfect accommodations right away, but with patience and persistence, you can find a place that meets your needs and feels like home.

By following these tips and doing thorough research, you can find wonderful school accommodations that enhance your overall educational experience. Good luck with your search </template>
              </v-card>

              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="1200">
                <v-card-item>
                  <v-card-title>Sports in Strathmore</v-card-title>

                  <v-card-subtitle>Home of various sports</v-card-subtitle>
                </v-card-item>

                <v-card-text> 
Quality sports offer a wide range of benefits that extend beyond physical fitness. Here are some of the key advantages:

Physical Health: Engaging in sports helps maintain a healthy weight, builds muscular strength, enhances cardiovascular fitness, improves flexibility, and promotes overall physical well-being. Regular physical activity through sports can reduce the risk of obesity, heart disease, diabetes, and other health conditions.

Mental Health: Sports can have a positive impact on mental health by reducing stress, anxiety, and depression. Physical activity stimulates the production of endorphins, neurotransmitters that promote feelings of happiness and well-being. Additionally, participating in team sports fosters social connections and a sense of belonging, which can combat feelings of loneliness and isolation.

Personal Development: Sports teach valuable life skills such as discipline, perseverance, resilience, goal-setting, time management, and teamwork. Athletes learn to push their limits, overcome challenges, and bounce back from setbacks, which are essential qualities for success in various aspects of life.

Social Skills: Participating in team sports provides opportunities to develop social skills such as communication, cooperation, leadership, and conflict resolution. Athletes learn to work collaboratively towards a common goal, respect diverse perspectives, and support their teammates, fostering strong interpersonal relationships on and off the field.

Self-Confidence: Success in sports boosts self-esteem and self-confidence. Accomplishing goals, mastering new skills, and receiving recognition for achievements contribute to a positive self-image and a sense of personal empowerment. Athletes learn to trust in their abilities and believe in their potential to overcome obstacles.

Academic Performance: Research suggests that students who participate in sports tend to perform better academically. Regular physical activity improves cognitive function, concentration, and memory, which can enhance learning and academic achievement. Additionally, the discipline and time management skills developed through sports can translate into better study habits and academic success.

Healthy Habits: Engaging in sports promotes the adoption of healthy lifestyle habits, including proper nutrition, adequate sleep, and regular exercise. Athletes learn the importance of taking care of their bodies and making choices that support their physical and mental well-being, which can lead to lifelong habits that contribute to overall health and longevity.

Overall, quality sports offer a holistic approach to personal development, encompassing physical fitness, mental health, social skills, and academic success. By participating in sports, individuals can lead healthier, happier, and more fulfilling lives. </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
