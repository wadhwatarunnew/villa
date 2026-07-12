import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogDetailSection {
  copy: string;
}

@Component({
  selector: 'villa-blog-detail-sections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail-sections.component.html'
})
export class BlogDetailSectionsComponent {
  sections: BlogDetailSection[] = [
    {
      copy: 'In recent times, when we think about going out for vacations, the first thing that hits our head is to stay somewhere in the lap of mother nature, and enjoy the wilderness! And, for this the best alternative one can go for is a luxury tent rather than with a concrete room in a hotel.',
    },
    {
      copy: "Moreover, whenever a owner of a resort will think of constructing a new resort having a kitchen, servants’ room, restaurant, bar, reception and 20 rooms attached with a bathroom with a veranda it will take at least 2 to 5 years. Not only this, it will also take year's and years to finalize his idea, alongwith spending time in designing the rooms of the resort, landscaping and then passing the map and so on. Most of the time, it has also been seen that due to not passing the map of his resort, the resort owner has to stop his dream project as a result, after which the owner of the resort has to go through a situation that causes some time in his life to become restless.",
    },
    {
      copy: "If you are planning to build a new concrete resort, then your competition will be starting from those old resorts who have been in the market for many decades, and have already established an important place in the hospitality industry. You also cannot charge more than the tourists coming to your resort from the other resorts around you, because their rooms are also built in the concrete way like yours. But, you will probably find out a way when you will read this blog till the end because here, we have tried to tell you how you can increase your sales 4 to 5 times your income from a tented resort.",
    },
    {
      copy: "Have you ever thought that this result of mine which has taken 1 to 2 years to be made and which can cost almost millions or crores? You have earned this investment till your resort becomes final so your income is zero, which can be from 1 to 2 years. If we add interest from 1 year to 2 years on the investment you have made to complete your resort, then that too will be in lakhs which you never get.",
    },
    {
      copy: "Now you will have a golden time if you think of building a nice luxury resort tent. Which is the first demand of today's tourists as they wish to stay in a luxury tent in the lap of nature, and don’t want to stay in concrete, because when a tourist plans his holiday these days, he keeps in mind that my house and office is made of concrete but now I will spend my leisure time in a place where nature will be with me. Being with nature means a resort but he thinks that I have to live in a resort but not in a concrete room but in a luxury tent that can protect me and my family from hot climate, rain water, fire and wild animals.",
    }
  ];
}
