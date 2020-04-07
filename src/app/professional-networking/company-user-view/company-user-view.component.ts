import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkingService } from 'src/app/services/networking.service';

@Component({
  selector: 'app-company-user-view',
  templateUrl: './company-user-view.component.html',
  styleUrls: ['./company-user-view.component.css']
})
export class CompanyUserViewComponent implements OnInit {

  companyId: number;
  companyDetails: any = {};
  companyPosts: any[];
  commentTxt: string;

  constructor(
    private router: ActivatedRoute,
    private netService: NetworkingService
  ) {
    this.companyId = +this.router.snapshot.paramMap.get('id');
    this.getCompanyDetails();
  }

  ngOnInit() {
  }

  getCompanyDetails() {
    this.netService.get_company_details(this.companyId)
      .subscribe(respObj => {
        this.companyDetails = { ...respObj };
        this.companyPosts = [...respObj['company_posts']];
      })
  }

  likePost(postId) {
    this.netService.like_post(postId)
      .subscribe(respObj => {
        let post = this.companyPosts.find(post => post.id == postId);
        post['isLiked'] = true;
      })
  }

  postComment(postId: number) {
    this.netService.comment_on_post(postId, this.commentTxt)
      .subscribe(respObj => {
        console.log(respObj);
      })
  }

}
