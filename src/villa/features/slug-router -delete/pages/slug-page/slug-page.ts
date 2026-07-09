import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-slug-page',
  templateUrl: './slug-page.html'
})
export class SlugPageComponent implements OnInit {

  data: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit() {

    const slug = this.route.snapshot.paramMap.get('slug')!;
    const menuItem = this.menuService.getBySlug(slug);

  if (!menuItem) {
    console.log('❌ NOT FOUND:', slug);
    return;
  }

  console.log('✅ FOUND:', menuItem);

  console.log('Level:', menuItem.level);
  console.log('Root:', menuItem.root);

    this.api.getBySlug(slug).subscribe(res => {

      if (!res) {
        this.router.navigate(['/404']);
        return;
      }

      this.data = res;
      console.log("data === ", this.data);

      if (res.type === 'tent') {
        this.loadTent(res);
      }

      else if (res.type === 'project') {
        this.loadProject(res);
      }

      else {
        this.loadPage(res);
      }

    });

  }

  loadTent(res: any) {
    console.log('Tent API call here', res);
    // this.tentService.get(res.id)
  }

  loadProject(res: any) {
    console.log('Project API call here', res);
    // this.projectService.get(res.id)
  }

  loadPage(res: any) {
    console.log('Static page', res);
  }

  findMenuBySlug(menu: any, slug: string, level = 1, root = ''): any {

  if (!menu) return null;

  if (menu.slug === slug) {
    return {
      ...menu,
      level,
      root   // 👈 important (resort-tent / projects)
    };
  }

  if (menu.children?.length) {
    for (const child of menu.children) {
      const found = this.findMenuBySlug(child, slug, level + 1, root);
      if (found) {
        return {
          ...found,
          root: root || menu.slug   // inherit root
        };
      }
    }
  }

  return null;
}
}