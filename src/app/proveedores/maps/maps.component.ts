import { CommonModule } from '@angular/common';
import {  AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import {GoogleMap, MapPolygon, MapMarker} from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';


declare var google: any;


@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [CommonModule, GoogleMap, MapPolygon, MapMarker],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit, AfterViewInit {
  
  

  center: google.maps.LatLngLiteral = {lng: -99.11605939569557, lat: 19.25823607526011};
  zoom = 15;

  vertices: google.maps.LatLngLiteral[] = [
    {lng: -99.12477121057594, lat: 19.26463714194416},
    {lng: -99.10515889825905, lat: 19.265163800860915},
    {lng: -99.11520181360329, lat: 19.25296918745731},
    {lng: -99.12511453332985, lat: 19.254293308513314},
    {lng: -99.11511453332985, lat: 19.255293308513314}
  ];


  @ViewChild(MapPolygon) pup!: MapPolygon;
  @ViewChildren(MapMarker) childs!: QueryList<MapMarker>;

 

   locations: google.maps.LatLngLiteral[] = [
    { lat: 19.262871917234555, lng: -99.12043190307884},
    { lat: 19.259630867149582, lng: -99.12116146393089},
    { lat: 19.259549840076662, lng: -99.11695576019554},
    { lat: 19.262588327909747, lng: -99.11867237396507},
    { lat: 19.26214268655112, lng: -99.13257694549827},
    { lat: 19.257726720351197, lng: -99.13244819946556},
    { lat: 19.25902316312672, lng: -99.12841415710716},
    { lat: 19.262183199451965, lng: -99.12815666504173},
    { lat: 19.26408729449915, lng: -99.13051700897483}
  ];

  markers: any[] = [];



  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {


    
  
    
  }

  


}


