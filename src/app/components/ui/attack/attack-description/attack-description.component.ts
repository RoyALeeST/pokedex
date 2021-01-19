import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'rlst-attack-description',
  templateUrl: './attack-description.component.html',
  styleUrls: ['./attack-description.component.scss']
})
export class AttackDescriptionComponent implements OnInit {

  moveInfo: any;
  moveInfoDesc: any;

  constructor(private activatedRoute: ActivatedRoute,
              private searchService: SearchService) {
    let moveId = this.activatedRoute.snapshot.paramMap.get('id');
    this.searchService.searchPokemonMovexEntry(moveId).subscribe((response)=>{
      let moveDesc = response.flavor_text_entries.find(entry => {
        if(entry.version_group.name == "diamond-pearl"){
          return true;
        }
      })
      console.log(moveDesc)
      this.moveInfoDesc = moveDesc.flavor_text;
      this.moveInfo = response
    })

   }

  ngOnInit(): void {
    
  }

}
