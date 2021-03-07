interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 8,
      center: {
        lat: 14,
        lng: 0,
      },
    });
  }

  addMaker(mappable: Mappable): void {
   const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });


    marker.addListener('click', ()=>{
      const infoWindow = new google.maps.InfoWindow({content: 'hello'})


      infoWindow.open(this.googleMap, marker)
    });

    

  }
}
