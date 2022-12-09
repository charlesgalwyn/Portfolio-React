import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog1 = new BlogBuilder({
  title: "Bohemian Traders Website Clone",
  image: require("../assets/img/bohemian blog.png"),
  description:
    "This blog is regarding the Bohemian Traders website cloning project that I build along with four other members of the team",
  bloglink:"https://medium.com/@charlesgalwyn/bohemian-traders-website-full-clone-with-dynamic-data-f083fe0afe2",   
});

const blog2 = new BlogBuilder({
  title: "Udemy Website Clone",
  image: require("../assets/img/Udemy blog.png"),
  description:
    "This blog is regarding the Udemy website cloning project that I build along with four other members of the team",
  bloglink:"https://medium.com/@charlesgalwyn/udemy-clone-a-team-project-47de86ebb7cb",  
})
  .addHeading("Heading")
  .addParagraph(
    "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  )
  .addHeading("New Heading")
  .addParagraph(
    "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
  )
  .addParagraph(
    "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
  );

  const blog3 = new BlogBuilder({
  title: "Jio-Mart Website Clone",
  image: require("../assets/img/JioMart blog.png"),
  description:
    "This blog is regarding the Jio-Mart Website cloning project that I build along with four other members of the team",
  bloglink:"https://medium.com/@charlesgalwyn/jiomart-clone-96e0b423f0d8", 
});

bloglist.push(blog1);
bloglist.push(blog2);
bloglist.push(blog3);

export default bloglist;
