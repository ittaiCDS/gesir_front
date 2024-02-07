import { AfterViewInit, Component, NgZone } from '@angular/core';
import { MapLoaderService } from '../../services/map.loader.service';

declare var google: any;

@Component({
  selector: 'app-maps-generate',
  standalone: true,
  imports: [],
  templateUrl: './maps-generate.component.html',
  styleUrl: './maps-generate.component.css'
})
export class MapsGenerateComponent implements AfterViewInit {
  map: any;
  drawingManager: any;
  constructor(private zone: NgZone) {
    
  }
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      MapLoaderService.load().then(() => {
        this.drawPolygon();
      });
    });
  }

  drawPolygon() {
    this.map = new google.maps.Map(document.getElementById('map')!, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon'],
      },
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event:any) => {
        // Polygon drawn
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          //this is the coordinate, you can assign it to a variable or pass into another function.
          alert(event.overlay.getPath().getArray());
        }
      }
    );
  }

}
