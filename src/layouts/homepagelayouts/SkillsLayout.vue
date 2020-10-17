<template>
    <section class="section section--theme section--size">
        <div class="section__center section__center--size">
            <h2 class="section__headline">Top skills</h2>
            <ul class="section__list">
                <li class="section__listitem 
                    section__listitem--size" 
                    v-for="(item, index) in topSkills" :key="index">

                    <a href="#" class="section__link section__link--disable">{{ item }}</a>
                </li>
            </ul>
            <h2 class="section__headline">Trending skills</h2>
            <ul class="section__list">
                <li class="section__listitem 
                    section__listitem--size" 
                    v-for="(item, index) in trendingSkills" :key="index">

                    <a href="#" class="section__link section__link--disable">{{ item }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            topSkills: ['Android Developer', 'Bookkeeper', 'Content Writer', 'Copywriter', 'Customer Service Representative',
                'Database Administrator', 'Data Scientist', 'Facebook Developer', 'Front-End Developer', 'Game Developer',
                'Graphic Designer', 'Information Security Analyst', 'iOS Developer', 'Java Developer', 'JavaScript Developer',
                'Logo Designer', 'Mobile App Developer', 'PHP Developer', 'Python Developer', 'Resume Writer',
                'Sales Consultant', 'SEO Expert', 'Social Media Manager', 'Software Developer', 'Software Engineer',
                'Technical Writer', 'UI Designer', 'UX Designer', 'Virtual Assistant', 'Web Designer', 'Wordpress Developer',
                'Writer'
            ],

            trendingSkills: ['Apple UIKit', 'Apple Xcode', 'Articulate storyline', 'Atlassian Confluence', 'Blockchain',
                'Customer retention', 'eLearning', 'Enterprise architecture', 'GitLab', 'Go development',
                'Google App Engine API', 'Google Cloud Platform', 'Node.js', 'Product photography', 'Rapid prototyping',
                'Risk management', 'Scala development', 'SCORM', 'Tensorflow', 'Volusion', 'Dropbox API',
                'iPhone UI design', 'Genetic algorithms', 'Vue.js', 'Social customer service',
                'HR consulting', 'Oculus Rift', 'Microsoft Power BI', 'Proposal writing', 'Vuforia',
                'Instructional design', 'React.js '
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.section{
    padding: 30px 0;

    &--size{
        height: auto;
        width: 100%;
    }

    &--theme{
        background-color: white;
    }

    &__center{
        margin: auto;

        &--size{
            width: 60%;
            height: 100%;
        }
    }

    &__list{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        list-style: none;
        padding: 30px 0;
    }

    &__listitem{
        padding: 5px 0;

    }

    &__link{
        font-size: 14px;
        color: #222;

        &:hover{
            color: $green;
            text-decoration: underline;
        }

        &--disable{
            text-decoration: none;
        }
        
    }
}

</style>