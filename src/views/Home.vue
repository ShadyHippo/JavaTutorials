<template>
  <div class="home">
    <img alt="don't skip the tutorial" src="../assets/MainPageMeme.jpg" align='right' 
    class="picture">
    
    
    <h1 class="indentHeading">The Beginning</h1>
    <h2 class="indentHeading">Now what? </h2>
    <p class="body">
      Ultimately, the goal is for you to learn something here. Coding can be a lot of fun, and making something is a very satisfying experience. 
    </p>
    <p class="body">
      Below is going to be a general outline for each lesson, and how to understand what I'm thinking better. 
    </p>
    
    
    <h2 class="indentHeading">Estimated Time:</h2>
    <p class="body">Estimated Time (beginner): Estimated time for someone who has no experience with the tools and technologies being used to complete the task, I am just guessing for these. Don't take offense at how long or short they are, I don't actually know. It will generally be much longer than the estimated time (me). </p>
    <p class="body">Estimated Time (me): This is my estimate for how long it would take someone to build the assignment with the level of experience I have in these technologies. Generally this will be far shorter than the above. </p>
    <p class="body">I include both in order to prevent you from spending hours and hours and hours barking up the wrong tree. For example, assignment 1 estimated time (beginner) is literally 30 or more times longer than mine. This isn't to make you feel bad, but it's to say "if it sounds easy and you think you figured it out in 4 minutes, you probably did." Also, if you spend longer than my time estimate on it, that probably means at some point you've stopped making progress and don't know how to google the problems yet. </p>
    <p class="body">Googling problems and troubleshooting are some of the main skills college has taught me so far in Computer Science, so I think it's important to have you spend some time doing it as well (as I know you will) instead of me giving you specific resources to use and example code on every lesson.</p>
    <p class="body">However, after a certain point it's time to say "this is a waste of time I'm not making progress", and ask me a question or two. I generally tend to be more thorough than needed, and if I start rambling tell me. </p>
    
    
    <h2 class="indentHeading">Objective / IMPORTANT / Concepts</h2>
    <p class="body">Says what concepts we are covering and what the goal of the assignment is. Sometimes I will give a heads up on something or an explanation of a portion of how something in the code works if I think having the context is necessary beforehand. </p>
    
    
    <h2 class="indentHeading">Assignment: </h2>
    <ol class="body">
      <li>The actual assignment begins here</li>
      <li>I will give different steps. Depending on the assignment, these will either be very vague or very detailed. For example, assignemnt 0 is very specific with screenshots of the process along the way; while Assignment 1 is very vague in comparison. </li>
    </ol>
    
    
    <h2 class="indentHeading">Helpful Hints: </h2>
    <p class="body">Helpful Hints: If I think there is something that is important for you to know that didn't fit somewhere else it will go here. This could range anywhere from code snippets, documentation links, to a meme about the task at hand. </p>
    <p class="body">I tend to look at things How I look at them, and will attempt to explain things how I see them. But you will see things differently than I do. I may not be able to explain in a way you understand it. Whenever that's the case, Google is your best friend! Even just making this page I Googled about 8 to 10 different things ranging from the commands to create a project, connecting GitHub, hosting the website, getting pictures to sit where I wanted them, the navigation bar, and much more. There is no shame in Googling things!</p>
    <img alt="explain meme" src="../assets/Outline/OutlineMeme.jpg" align='center' class="picture">
  </div>
</template>
<script>
// @ is an alias to /src
import Outline from '@/components/Outline.vue'

export default {
  name: 'home',
  components: {
    Outline
  }
}
</script>
