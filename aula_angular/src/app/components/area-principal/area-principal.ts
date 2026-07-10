import { Component } from '@angular/core';
import { Navegation } from "../navegation/navegation";
import {RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-area-principal',
  imports: [Navegation, RouterOutlet],
  templateUrl: './area-principal.html',
  styleUrl: './area-principal.css',
})
export class AreaPrincipal {}
