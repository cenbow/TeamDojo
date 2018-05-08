import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeamdojoSharedModule } from 'app/shared';
import { TEAMS_ROUTE, TeamsComponent } from './';
import { TeamsStatusComponent } from './teams-status.component';
import { TeamsAchievementsComponent } from './teams-achievements.component';
import { TeamsSkillsComponent } from './teams-skills.component';
import { TeamsSelectionComponent } from 'app/teams/teams-selection/teams-selection.component';
import { TeamsResolve } from './teams.route';
import { TeamsService } from './teams.service';
import { TeamsSkillsService } from './teams-skills.service';
import { TeamsSelectionService } from './teams-selection/teams-selection.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamsAchievementsService } from 'app/teams/teams-achievements.service';
import { ImageDataUrlPipe } from 'app/shared/pipe/image-data-url.pipe';

@NgModule({
    imports: [TeamdojoSharedModule, RouterModule.forChild([TEAMS_ROUTE]), NgbModule],
    declarations: [TeamsComponent, TeamsStatusComponent, TeamsAchievementsComponent, TeamsSkillsComponent, TeamsSelectionComponent, ImageDataUrlPipe],
    entryComponents: [TeamsSelectionComponent],
    providers: [TeamsService, TeamsSkillsService, TeamsResolve, TeamsSelectionService, TeamsAchievementsService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamsModule {}
