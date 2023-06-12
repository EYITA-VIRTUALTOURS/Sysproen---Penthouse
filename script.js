(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "scrollBarMargin": 2,
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "overflow": "visible",
 "shadow": false,
 "borderRadius": 0,
 "definitions": [{
 "initialPosition": {
  "yaw": 108.4,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E771A4D6_AD82_BD89_41D7_76EBFD7A5176"
},
{
 "initialPosition": {
  "yaw": 169.83,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FCBC78F3_AD82_B58F_41E3_A49BA8C68E85"
},
{
 "initialPosition": {
  "yaw": 25.37,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E188261A_AD82_BCB8_41E3_D9109F49DE8F"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -153.75,
   "yaw": -2.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3"
  }
 ],
 "label": "016",
 "id": "panorama_A1EFF13D_AB83_98C7_41DB_844589577050",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_806B90A8_AC81_9599_41DE_4FDFFFDF7E85",
  "this.overlay_EA3B646F_AD82_BC97_41BF_AE59539660F7",
  "this.panorama_A1EFF13D_AB83_98C7_41DB_844589577050_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 178.62,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1F9F62A_AD82_BC98_4196_599AC4347249"
},
{
 "initialPosition": {
  "yaw": 30.52,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E26E5779_AD82_BB78_41DD_FF905F04D73F"
},
{
 "initialPosition": {
  "yaw": -171.96,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E15216C5_AD82_BD8B_41E1_DD8EEE89643C"
},
{
 "initialPosition": {
  "yaw": -99.09,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E02EB581_AD82_BF8B_41D3_44CF018CEAB0"
},
{
 "initialPosition": {
  "yaw": 98.35,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E329481B_AD82_B4BF_41B3_400226728EEE"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 41.7,
   "yaw": -47.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774"
  }
 ],
 "label": "043",
 "id": "panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B925A924_AB86_9489_41BF_6416844D88AF",
  "this.overlay_EB88AB9F_AD81_6BB7_41D4_43AE401E2766",
  "this.panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -177.49,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6CCE3A3_AD82_BB8F_41E4_36A02F28F6A0"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -54.52,
   "yaw": -11.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E"
  },
  {
   "backwardYaw": 8.04,
   "yaw": 164.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610"
  },
  {
   "backwardYaw": 8.04,
   "yaw": -172.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610"
  }
 ],
 "label": "019",
 "id": "panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_81224ADE_AC87_95B9_41B4_F2C7A9DA4E76",
  "this.overlay_82B95642_AC86_FC88_41D7_E03D27F65425",
  "this.overlay_EF308C72_AC81_6C89_41E3_9D2E96CD0FFA",
  "this.overlay_EAADB68E_ADBE_9D99_41DC_66395456CCDD",
  "this.overlay_EA3A13BE_ADBE_9BF9_4197_86E6EC07BDB6",
  "this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_camera"
},
{
 "initialPosition": {
  "yaw": -166.94,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E13DE66B_AD82_BC9F_41DA_4AD7C4F69FCA"
},
{
 "initialPosition": {
  "yaw": -35.67,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E2D8571F_AD82_BCB7_41E0_3426E8FED341"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 164.8,
   "yaw": 8.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E"
  },
  {
   "backwardYaw": 33.29,
   "yaw": -154.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E"
  },
  {
   "backwardYaw": 33.29,
   "yaw": 165.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E"
  },
  {
   "backwardYaw": 67.08,
   "yaw": 90.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9"
  }
 ],
 "label": "020",
 "id": "panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_82E1D844_AC81_F488_41DC_048A6B82D667",
  "this.overlay_82AE77EE_AC81_BB99_41B3_37E58A22EEA7",
  "this.overlay_83533970_AC81_7489_41E1_1B7D8488B5CA",
  "this.overlay_8305CFD6_AC82_AB89_41D0_7FB5635BF1AD",
  "this.overlay_EA2E7CED_ADBF_AD9B_41D7_628AC099335B",
  "this.overlay_EA484D9E_ADBF_6FB9_41E0_C96E1AA3D974",
  "this.overlay_EB91D09A_ADBE_95B9_41D2_A6D30E2681F9",
  "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 168.19,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E35C18C9_AD82_B59B_41C6_7B5280415A08"
},
{
 "initialPosition": {
  "yaw": -115.31,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E653B417_AD82_BCB7_41D7_CC808EA7D66B"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -164.8,
   "yaw": -2.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1"
  }
 ],
 "label": "032",
 "id": "panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_972F3051_AC81_B48B_41C6_994141A76C7C",
  "this.overlay_EA8D0F44_AD82_EC89_41DC_DB11350E803D",
  "this.panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -172.09,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E27E876D_AD82_BC98_41E2_707B7BD5ECEE"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -63.94,
   "yaw": 2.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B"
  }
 ],
 "label": "046",
 "id": "panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BEBAA56A_AB8E_FC99_419A_D553B70E35D3",
  "this.overlay_EAEBB0D9_AD81_B5BB_41E0_02C2E6A5C4C6",
  "this.panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_camera"
},
{
 "initialPosition": {
  "yaw": -94.96,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E01E358E_AD82_BF99_41C8_521A61F9694E"
},
{
 "initialPosition": {
  "yaw": -134.41,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E25E3785_AD82_BB88_41C4_A0BB71A5E76E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_camera"
},
{
 "initialPosition": {
  "yaw": 163.55,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E143B6CF_AD82_BD97_41D8_5BC3326D259C"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.3,
   "yaw": -74.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D"
  }
 ],
 "label": "006",
 "id": "panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_8CF05D9F_AC81_6FB7_41B3_92222E72AEA5",
  "this.overlay_E9BB58B0_AD81_7589_41D9_04A167636E4F",
  "this.panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 51.12,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E62CB3BC_AD82_BBF8_416B_71E3DF3CB1FD"
},
{
 "initialPosition": {
  "yaw": 83.15,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3B2A7A9_AD82_BB9B_41D6_90A3F4C5750F"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_camera"
},
{
 "initialPosition": {
  "yaw": 177.11,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E37BB88F_AD82_B598_41E1_EF32907D834B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_camera"
},
{
 "initialPosition": {
  "yaw": 176.99,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6988356_AD82_B489_41DF_8942389C472C"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 74.99,
   "yaw": -23.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21"
  },
  {
   "backwardYaw": 80.91,
   "yaw": -147.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E"
  },
  {
   "backwardYaw": 80.91,
   "yaw": 149.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E"
  },
  {
   "backwardYaw": 85.04,
   "yaw": -78.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D"
  },
  {
   "backwardYaw": 22.74,
   "yaw": 22.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D"
  }
 ],
 "label": "007",
 "id": "panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_8D03383E_AC81_74F8_41E3_188597A336DA",
  "this.overlay_8D4BC620_AC82_BC89_41E0_A78EAA079345",
  "this.overlay_8D8DCE0E_AC82_EC99_41C9_7DDA95E364AF",
  "this.overlay_8DDF3616_AC82_9C89_41DB_4283474339B3",
  "this.overlay_88A8C800_AC81_9489_41D2_1355A58C8CE4",
  "this.overlay_E9824C59_AD87_ACBB_41E3_E60C980E776D",
  "this.overlay_E9DFD1FD_AD87_F77B_41E4_E3E35C755CFB",
  "this.overlay_E9F7A75F_AD87_9CB7_41BD_CB721AA9C8E0",
  "this.overlay_E9662E98_AD87_6DB9_41CD_CC7EF24522F3",
  "this.overlay_EAD6E56A_AD86_9C98_41D9_4125B426DC10",
  "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 129.63,
   "yaw": -11.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29"
  },
  {
   "backwardYaw": -2.89,
   "yaw": -164.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F"
  }
 ],
 "label": "031",
 "id": "panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_96817678_AC83_FD79_41B6_6187882CD061",
  "this.overlay_ED929EBC_AC8E_ADF8_41E0_CEB4E2C7630D",
  "this.overlay_EA9E12D2_AD83_F588_41E1_E99AFCE9FBE2",
  "this.overlay_EBBE4301_AD83_9488_41CB_9BE1FB426C84",
  "this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -105.01,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E0CCC568_AD82_BC99_41CB_89E59D5F7AEA"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.88,
   "yaw": -89.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937"
  },
  {
   "backwardYaw": 3.39,
   "yaw": 64.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B"
  },
  {
   "backwardYaw": -55.39,
   "yaw": 16.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9"
  },
  {
   "backwardYaw": 4.02,
   "yaw": 123.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0"
  }
 ],
 "label": "013",
 "id": "panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_84AAF323_AC83_B488_41E3_45A74E5E9175",
  "this.overlay_85DF4961_AC82_B48B_41E1_6825F24E7415",
  "this.overlay_85CEEF21_AC86_EC8B_41D1_8018BCD449C6",
  "this.overlay_9376D088_AC8E_B599_41DF_E231EBDAA61F",
  "this.overlay_EADFA22E_AD86_9499_41E3_53021999F0BC",
  "this.overlay_EAE3C16E_AD87_7498_41DA_40CB23B98857",
  "this.overlay_EA17D4D6_AD87_7D89_41DF_2FA59DDD7A42",
  "this.overlay_E4B53B9A_AD87_ABB9_41E3_AA1B8E69A88E",
  "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 146.21,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E06395BF_AD82_BFF7_41D3_0ADFC4A81F27"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 120.33,
   "yaw": 128.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32"
  },
  {
   "backwardYaw": 3.52,
   "yaw": -3.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117"
  },
  {
   "backwardYaw": 34.17,
   "yaw": 53.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1"
  }
 ],
 "label": "037",
 "id": "panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_A5FEF3CF_AB82_9B97_41DC_74AC015262C0",
  "this.overlay_A62975B6_AB82_FF88_41D1_6F1C06FC55F2",
  "this.overlay_A5E565B2_AB82_BF89_41C5_1446538094F4",
  "this.overlay_E5F5C535_AD83_9C8B_41D6_C55D50D74D29",
  "this.overlay_EAE6ABDE_AD83_ABB9_41D0_9D2FAEA25891",
  "this.overlay_EB5F9AFE_AD82_9579_41BF_9FDFD29FF04A",
  "this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 90.44,
   "yaw": 67.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610"
  },
  {
   "backwardYaw": 16.83,
   "yaw": -55.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D"
  },
  {
   "backwardYaw": 86.04,
   "yaw": 3.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3"
  }
 ],
 "label": "014",
 "id": "panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_859F42AD_AC86_F59B_41E4_8D6D8BB4A4A0",
  "this.overlay_85E044B7_AC86_BDF7_41E3_37F15A9C97A5",
  "this.overlay_865C2DED_AC81_AF9B_41E0_9D873B3FD694",
  "this.overlay_EA8BAABC_AD81_95F8_41B1_51C6D8F4439A",
  "this.overlay_EACDAB2C_AD81_B499_41E3_11116AF4128A",
  "this.overlay_EAC1416B_AD81_949F_41E3_0949A19CF98A",
  "this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EFF13D_AB83_98C7_41DB_844589577050_camera"
},
{
 "initialPosition": {
  "yaw": 162.79,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E11E9686_AD82_BD89_41E3_215519A9AFA1"
},
{
 "initialPosition": {
  "yaw": -142.82,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E12C1679_AD82_BD7B_41CA_BBE991CE5C35"
},
{
 "initialPosition": {
  "yaw": -99.09,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E03C9574_AD82_BC89_41D0_9BE6FF0EBF8D"
},
{
 "initialPosition": {
  "yaw": 33.04,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E2A5C6E5_AD82_BD8B_41D8_A58A6019ECFB"
},
{
 "initialPosition": {
  "yaw": 58.28,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E097651E_AD82_BCB8_4179_2F9E51510535"
},
{
 "initialPosition": {
  "yaw": 99.86,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E17FC69F_AD82_BDB7_41DE_A8D95A816B9E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_camera"
},
{
 "initialPosition": {
  "yaw": 125.48,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E17016AE_AD82_BD99_41CE_ACB24D2D85C6"
},
{
 "initialPosition": {
  "yaw": 105.89,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6810370_AD82_B489_41E3_968AA0C8483B"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_camera"
},
{
 "initialPosition": {
  "yaw": 166.06,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E23A473A_AD82_BCF9_418E_0FC25DA2477C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_camera"
},
{
 "initialPosition": {
  "yaw": 177.49,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E7B54430_AD82_BC89_4199_3DDD9D80D4A6"
},
{
 "initialPosition": {
  "yaw": -151.24,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E34DE8DE_AD82_B5B9_41CE_A5BC4FBA04B7"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_camera"
},
{
 "items": [
  {
   "media": "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_camera"
  },
  {
   "media": "this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_camera"
  },
  {
   "media": "this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_camera"
  },
  {
   "media": "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_camera"
  },
  {
   "media": "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_camera"
  },
  {
   "media": "this.panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_camera"
  },
  {
   "media": "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_camera"
  },
  {
   "media": "this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_camera"
  },
  {
   "media": "this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_camera"
  },
  {
   "media": "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_camera"
  },
  {
   "media": "this.panorama_A1ED841E_AB83_98C4_41CD_649249221D46",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1ED841E_AB83_98C4_41CD_649249221D46_camera"
  },
  {
   "media": "this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_camera"
  },
  {
   "media": "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_camera"
  },
  {
   "media": "this.panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_camera"
  },
  {
   "media": "this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_camera"
  },
  {
   "media": "this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_camera"
  },
  {
   "media": "this.panorama_A1EFF13D_AB83_98C7_41DB_844589577050",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EFF13D_AB83_98C7_41DB_844589577050_camera"
  },
  {
   "media": "this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_camera"
  },
  {
   "media": "this.panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_camera"
  },
  {
   "media": "this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_camera"
  },
  {
   "media": "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_camera"
  },
  {
   "media": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_camera"
  },
  {
   "media": "this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_camera"
  },
  {
   "media": "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_camera"
  },
  {
   "media": "this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_camera"
  },
  {
   "media": "this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_camera"
  },
  {
   "media": "this.panorama_A1EFA152_AB83_9B5D_41E5_060025188045",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EFA152_AB83_9B5D_41E5_060025188045_camera"
  },
  {
   "media": "this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_camera"
  },
  {
   "media": "this.panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_camera"
  },
  {
   "media": "this.panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_camera"
  },
  {
   "media": "this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_camera"
  },
  {
   "media": "this.panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_camera"
  },
  {
   "media": "this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_camera"
  },
  {
   "media": "this.panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_camera"
  },
  {
   "media": "this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_camera"
  },
  {
   "media": "this.panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_camera"
  },
  {
   "media": "this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_camera"
  },
  {
   "media": "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_camera"
  },
  {
   "media": "this.panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_camera"
  },
  {
   "media": "this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_camera"
  },
  {
   "media": "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_camera"
  },
  {
   "media": "this.panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_camera"
  },
  {
   "media": "this.panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_camera"
  },
  {
   "media": "this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_camera"
  },
  {
   "media": "this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_camera"
  },
  {
   "media": "this.panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_camera"
  },
  {
   "media": "this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_camera"
  },
  {
   "media": "this.panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_camera"
  },
  {
   "media": "this.panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 90.69,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3E6F7E1_AD82_BB8B_41E0_958332FA1C8E"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 64.69,
   "yaw": 3.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D"
  }
 ],
 "label": "050",
 "id": "panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_93E4CEE6_AC81_ED89_41E0_67C6FFC40F6A",
  "this.overlay_EA866C54_AD86_EC89_41E2_B69C605526D8",
  "this.panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -74.86,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1B5A5EE_AD82_BF99_41DC_7F3C97DBCA8B"
},
{
 "initialPosition": {
  "yaw": -15.2,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E61E73C8_AD82_BB98_41D1_79B002DEE9D1"
},
{
 "initialPosition": {
  "yaw": -176.48,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E551E31C_AD82_B4B9_418B_D13EF441AC93"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_camera"
},
{
 "initialPosition": {
  "yaw": 111.16,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E2E80712_AD82_BC89_419D_FD3AE02257A2"
},
{
 "initialPosition": {
  "yaw": 124.61,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E384C7CB_AD82_BB9F_41DB_05C49952E3D8"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -53.26,
   "yaw": -37.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E"
  },
  {
   "backwardYaw": 53.51,
   "yaw": 34.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3"
  }
 ],
 "label": "035",
 "id": "panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_910CC857_AC82_9488_41D4_C58BDB5D403B",
  "this.overlay_91D30BDD_AC81_6BB8_4169_7CCA54F155E5",
  "this.overlay_E97BC508_AD8F_FC99_41D6_413E91FC7187",
  "this.overlay_E5C486DD_AD81_BDBB_41E2_407266A910A5",
  "this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 29.9,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E0DB655A_AD82_BCB9_41E0_19433ADB6D1A"
},
{
 "initialPosition": {
  "yaw": -144.95,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E7EAD472_AD82_BC89_41DD_52E488955860"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -33.79,
   "yaw": 0.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32"
  },
  {
   "backwardYaw": 15.7,
   "yaw": -72.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030"
  },
  {
   "backwardYaw": 7.29,
   "yaw": 95.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31"
  }
 ],
 "label": "047",
 "id": "panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BEA81E6A_AB8F_AC99_41B0_C1DECA6371D2",
  "this.overlay_BD0DFCCB_AB82_ED9F_41B6_D9C61FD39238",
  "this.overlay_BE47D6D4_AB83_9D89_41CD_1AA440A0F8D1",
  "this.overlay_EAE74EFD_AD81_ED7B_418E_68F622C20D80",
  "this.overlay_EBE5A4C3_AD81_7D88_41E1_DEA4DC96AB1E",
  "this.overlay_E97F3BA4_AD82_AB88_41B4_B8ECB95978BF",
  "this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_camera"
},
{
 "initialPosition": {
  "yaw": -84.41,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E66213F7_AD82_BB88_41D5_9206BC385981"
},
{
 "initialPosition": {
  "yaw": -172.09,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E20C5761_AD82_BC88_41E1_7F448AA6354C"
},
{
 "initialPosition": {
  "yaw": 138.67,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E0B52504_AD82_BC88_41D2_6AE85D76FD0B"
},
{
 "initialPosition": {
  "yaw": 15.2,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E797144B_AD82_BC9F_41E2_61D9479D28FC"
},
{
 "initialPosition": {
  "yaw": -166.94,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1CBD658_AD82_BCB9_41CB_45B1B41935D8"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_camera"
},
{
 "initialPosition": {
  "yaw": 179.12,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3A287B4_AD82_BB89_41DF_5E1B2C37B071"
},
{
 "initialPosition": {
  "yaw": -79.51,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E10E0693_AD82_BD8F_4177_A705AC8361A2"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 123.73,
   "yaw": 4.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D"
  },
  {
   "backwardYaw": 1,
   "yaw": 37.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49"
  },
  {
   "backwardYaw": -96.85,
   "yaw": -80.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724"
  }
 ],
 "label": "012",
 "id": "panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_8AAEDEF7_AC8F_6D88_41A1_DFCB52490E4F",
  "this.overlay_842B3AFE_AC8F_B578_41DD_3B9DE7E90FA8",
  "this.overlay_86F2DB0F_AC81_9497_41A7_90D497128589",
  "this.overlay_EA9698CD_AD81_959B_41D6_C910BEC52B4A",
  "this.overlay_EAD2D9A5_AD81_B788_41E3_6F1BD909A484",
  "this.overlay_E41EB152_AD86_B489_41C6_074AAD3C8E14",
  "this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -59.67,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E55BD312_AD82_B489_41D2_EF50D442300E"
},
{
 "initialPosition": {
  "yaw": -177.99,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3D6C7EC_AD82_BB99_41DE_04E964EB9F2B"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.31,
   "yaw": -0.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D"
  },
  {
   "backwardYaw": 2.01,
   "yaw": -149.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842"
  }
 ],
 "label": "017",
 "id": "panorama_A1E8474D_AB83_E747_41A3_59C2784BF937",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_806886F9_AC82_FD7B_41DB_006405694EF2",
  "this.overlay_80BF4CD2_AC81_ED89_41DA_861EF27EC69B",
  "this.overlay_EA8DD042_AD83_7489_418E_9C026D0D70BF",
  "this.overlay_EAE52EAB_AD81_AD9E_41B5_77CED78D376A",
  "this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -146.71,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E60053E0_AD82_BB88_41D3_161775D242E2"
},
{
 "initialPosition": {
  "yaw": -95.97,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6A4B34B_AD82_B49F_41D0_036B0FCCD402"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_camera"
},
{
 "initialPosition": {
  "yaw": 156.51,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E001F5A6_AD82_BF89_41C5_C0D7F67578EC"
},
{
 "initialPosition": {
  "yaw": -85.29,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E07215B3_AD82_BF8F_41A4_C2DE57FBC4C3"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.68,
   "yaw": -121.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32"
  },
  {
   "backwardYaw": 2.51,
   "yaw": -63.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8"
  }
 ],
 "label": "045",
 "id": "panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BF696202_AB82_B489_41D0_B9DCE13E4D32",
  "this.overlay_BF2946B1_AB81_7D8B_41E0_AF9953B59018",
  "this.overlay_EAC880DA_AD9E_95B8_41E3_B57776D23F67",
  "this.overlay_EA26048F_AD9E_9D97_41DF_CFEF95D9A5B4",
  "this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 168.95,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E2F63707_AD82_BC97_41D9_E9D4188394B6"
},
{
 "initialPosition": {
  "yaw": -175.98,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3F497D5_AD82_BB8B_41D8_96281FBE0228"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -154.63,
   "yaw": 33.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610"
  },
  {
   "backwardYaw": -1.38,
   "yaw": 0.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB"
  },
  {
   "backwardYaw": -37.93,
   "yaw": -53.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1"
  },
  {
   "backwardYaw": -111.92,
   "yaw": -137.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D"
  }
 ],
 "label": "021",
 "id": "panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_9CF84B87_AC8E_AB97_41E4_71E9DCF6DC62",
  "this.overlay_9D4DB306_AC8E_B489_41E1_E41E86423CAB",
  "this.overlay_9D2349F1_AC8F_B78B_41DA_9B42644E54D8",
  "this.overlay_9E04DB91_AC86_AB88_41A2_DF04EC4E96B7",
  "this.overlay_EABC2CEA_ADBE_AD99_41D3_CEC62E907B50",
  "this.overlay_EAC45897_AD81_95B7_41C4_64A063BA76ED",
  "this.overlay_EB6A56B1_AD81_9D8B_41D5_3A691F473327",
  "this.overlay_EA5B530E_AD82_F499_41E3_F7310AE89BAD",
  "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.8,
   "yaw": 5.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980"
  },
  {
   "backwardYaw": -11.05,
   "yaw": -54.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E"
  },
  {
   "backwardYaw": -68.84,
   "yaw": 155.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E"
  },
  {
   "backwardYaw": 144.33,
   "yaw": 106.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC"
  }
 ],
 "label": "001",
 "id": "panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B2A4A42F_AB86_BC98_41D9_A06106679007",
  "this.overlay_BDA1C239_AB86_94F8_41E2_7A8B4C82C8C0",
  "this.overlay_BCFBB726_AB86_9C88_41E1_F74A6AB539CF",
  "this.overlay_BCBA225F_AB87_B4B7_41D2_69582A894BD2",
  "this.overlay_E8B18C28_AD82_EC98_41CC_41073BEE395B",
  "this.overlay_E9C21195_AD83_778B_41D1_CAE83FB80E05",
  "this.overlay_E915E64A_AD83_BC99_41B9_F8DEF8664C9E",
  "this.overlay_EABD232B_AD83_949F_41BB_8CD988461ED2",
  "this.overlay_EAB1F914_AD9E_B489_41AB_D34A5F444B2D",
  "this.overlay_E4A9AD9C_AD9E_AFB9_41D8_1A805B378A5A",
  "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_camera"
},
{
 "initialPosition": {
  "yaw": -56.27,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E250A78F_AD82_BB97_41E0_8291D4B23D9A"
},
{
 "initialPosition": {
  "yaw": 32.03,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E73C7498_AD82_BDB9_41E4_6425127B148F"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 149.35,
   "yaw": 13.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427"
  }
 ],
 "label": "026",
 "id": "panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_947A7D4B_AC82_AC9F_41DE_39279B9AAC48",
  "this.overlay_EAE4D157_AD87_F4B7_41E1_E46856589676",
  "this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_camera"
},
{
 "initialPosition": {
  "yaw": -142.07,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_FCAEC905_AD82_B48B_41DF_C3D4E2E2C11A"
},
{
 "initialPosition": {
  "yaw": -126.49,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E74574F9_AD82_BD78_41CE_EEF671BAF3AE"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 45.59,
   "yaw": -81.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117"
  }
 ],
 "label": "039",
 "id": "panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BBF49253_AB82_948F_41DB_F934E20DAFC0",
  "this.overlay_EAF62099_AD86_B5BB_41E4_4DFA7EAC36B6",
  "this.panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E"
  },
  {
   "backwardYaw": -150.1,
   "yaw": 7.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980"
  }
 ],
 "label": "003",
 "id": "panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B1080304_AC82_9489_41D7_5DB1A778F273",
  "this.overlay_B196D04E_AC81_9499_41D6_9A05B0D3C3BD",
  "this.overlay_E86BE86E_AD81_9498_41E2_C2B8C1BBCA51",
  "this.overlay_E9A0B20B_AD81_9498_41E4_E642ECBDD788",
  "this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -146.71,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E60E23D5_AD82_BB88_41E1_0018C14FDE7E"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 37.93,
   "yaw": 1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0"
  }
 ],
 "label": "036",
 "id": "panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_92F5CF23_AC8F_6C8F_41B9_D858CFF52F3E",
  "this.overlay_EB85E0FA_AD82_B579_41E2_7646FDE8F55E",
  "this.panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_camera"
},
{
 "initialPosition": {
  "yaw": -138.3,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E63CF3B1_AD82_BB8B_41BA_5122A46FE9D6"
},
{
 "initialPosition": {
  "yaw": 174.35,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E763C4E2_AD82_BD89_41CA_F224A35E8A45"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 22.23,
   "yaw": 22.74,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B"
  },
  {
   "backwardYaw": -13.94,
   "yaw": 94.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21"
  },
  {
   "backwardYaw": -2.39,
   "yaw": -17.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724"
  }
 ],
 "label": "009",
 "id": "panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_885C554C_AC9E_9C99_41E4_5B4D973FFE5A",
  "this.overlay_88E2576E_AC9E_9C99_41E4_D486CC4F8319",
  "this.overlay_897FAB8E_AC82_EB99_41E4_E51830231042",
  "this.overlay_EAC05562_AD81_9C89_41C2_97CAC77C9C06",
  "this.overlay_EBCB9540_AD81_BC89_41E3_107C08850DA1",
  "this.overlay_EB4121E6_AD81_7788_41D9_414BE4C2AF78",
  "this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 49.62,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E7F93465_AD82_BC8B_41D0_B32B43D4D2E0"
},
{
 "initialPosition": {
  "yaw": 26.25,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E0E9754B_AD82_BC9F_41DA_052A2AECAD47"
},
{
 "initialPosition": {
  "yaw": 126.74,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E75384ED_AD82_BD98_41AF_9D666E1A7E67"
},
{
 "initialPosition": {
  "yaw": 132.27,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E788D458_AD82_BCB9_41E0_E7088E2D2C53"
},
{
 "initialPosition": {
  "yaw": -112.92,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E671C3ED_AD82_BB98_41C1_4DCFEF89D3B8"
},
{
 "initialPosition": {
  "yaw": -176.61,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E39357BF_AD82_BBF7_4193_494D209F7FCE"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 13.06,
   "yaw": 149.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C"
  },
  {
   "backwardYaw": 13.06,
   "yaw": -146.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C"
  },
  {
   "backwardYaw": 37.18,
   "yaw": -5.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D"
  }
 ],
 "label": "025",
 "id": "panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_9A3755D0_AC9E_9F89_41E4_1124C48169AA",
  "this.overlay_9B949D1F_AC81_6CB7_41C4_0EEA6CC21D87",
  "this.overlay_95D66029_AC81_749B_41AE_C83BC8953491",
  "this.overlay_EA947A37_AD86_B4F7_41B6_EB705EEDE388",
  "this.overlay_EB8C9CF5_AD86_AD8B_41B9_68C0465044A7",
  "this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -17.46,
   "yaw": 2.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B"
  }
 ],
 "label": "030",
 "id": "panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_96050361_AC82_9488_41DA_3D7ABB4B3898",
  "this.overlay_EA9799EA_AD83_7799_41E5_4F8BDCA4E255",
  "this.panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E"
  },
  {
   "backwardYaw": 5.28,
   "yaw": -86.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E"
  },
  {
   "backwardYaw": 7.91,
   "yaw": -150.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC"
  },
  {
   "backwardYaw": 7.91,
   "yaw": 145.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC"
  }
 ],
 "label": "002",
 "id": "panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B438EBD5_AC82_EB8B_41B8_75BD545956C0",
  "this.overlay_B471F4F6_AC82_BD88_41E4_95AF02D17512",
  "this.overlay_B4D21A6F_AC83_9497_41D8_75CE12A2DF14",
  "this.overlay_B59E6A8A_AC81_9599_41E0_7D990536D7F3",
  "this.overlay_E8622BBE_AD82_EBF8_41E1_5E1A49E0DB1B",
  "this.overlay_E9FF9361_AD82_948B_41C0_34057476012F",
  "this.overlay_E94AF0F4_AD81_9588_41D0_67D0DC8B914F",
  "this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_camera"
},
{
 "initialPosition": {
  "yaw": -152.99,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E197C60D_AD82_BC9B_41E3_A9BF78B2FCDD"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 153.62,
   "yaw": -84.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774"
  },
  {
   "backwardYaw": 84.03,
   "yaw": -144.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF"
  },
  {
   "backwardYaw": -3.01,
   "yaw": 3.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3"
  },
  {
   "backwardYaw": -81.4,
   "yaw": 45.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE"
  }
 ],
 "label": "038",
 "id": "panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BB636139_AB87_94F8_41E5_709F1EC43920",
  "this.overlay_BAF6379D_AB87_9BB8_41A0_B7B8B4E55FEA",
  "this.overlay_A43BE6C7_AB86_9D88_41BB_3DF44365A403",
  "this.overlay_A4533250_AB86_9488_41E3_0BB8586AB49A",
  "this.overlay_EACF9E04_AD81_AC88_41D4_833AFE216626",
  "this.overlay_EA7C14CD_AD86_9D98_41A4_7467D8F67787",
  "this.overlay_EBDAC53F_AD86_FCF7_41E1_957F24948C87",
  "this.overlay_EAC7EA7F_AD86_9577_4194_4B1A489FC836",
  "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -17.21,
   "yaw": -2.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D"
  },
  {
   "backwardYaw": 100.49,
   "yaw": 98.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED841E_AB83_98C4_41CD_649249221D46"
  },
  {
   "backwardYaw": -80.14,
   "yaw": -96.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0"
  }
 ],
 "label": "010",
 "id": "panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_89A573FB_AC83_7B7F_41C8_D7A71721817F",
  "this.overlay_8AFCFD17_AC83_ACB7_41DF_0B152C28A62F",
  "this.overlay_8AF373C2_AC82_9B88_41DE_1CA946D96410",
  "this.overlay_EA82DEE2_AD83_6D88_41E1_59E3A278F852",
  "this.overlay_EA41EC50_AD83_AC89_41E2_1CB1CF91F5F8",
  "this.overlay_EBC47461_AD83_FC88_41DF_B6F715709A49",
  "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_camera"
},
{
 "initialPosition": {
  "yaw": 162.54,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3190846_AD82_B489_41E2_198D74445F2A"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.59,
   "yaw": 7.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94"
  }
 ],
 "label": "049",
 "id": "panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BDB42D28_AB81_AC99_41E2_5C2BE8889446",
  "this.overlay_EA28154D_AD83_BC98_41A4_F65144D82C41",
  "this.panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -179.37,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E087352C_AD82_BC99_41DC_F2F6345C58A8"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 83.15,
   "yaw": -81.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB"
  }
 ],
 "label": "034",
 "id": "panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_91639620_AC82_9C89_41C9_418E1D88E8D0",
  "this.overlay_EAE3B949_AD81_9498_41E0_3E03817D7EA3",
  "this.panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -137.29,
   "yaw": -111.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E"
  },
  {
   "backwardYaw": -71.6,
   "yaw": 112.55,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29"
  },
  {
   "backwardYaw": -5.65,
   "yaw": 37.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427"
  }
 ],
 "label": "022",
 "id": "panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_9EE84C35_AC81_EC8B_41E2_A98C1E9DC491",
  "this.overlay_9EBEA23B_AC81_94FF_41D2_280BFB2ACBF7",
  "this.overlay_9F677FC6_AC82_AB89_41D4_446717C96BD1",
  "this.overlay_EA85454A_AD83_9C99_41C1_1787ABA43508",
  "this.overlay_EAD74454_AD83_9C88_41CA_5FDBED37CE9D",
  "this.overlay_EB05E977_AD83_9777_41C3_80357D97DF91",
  "this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_camera"
},
{
 "initialPosition": {
  "yaw": -177.11,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1A605FC_AD82_BF79_41C9_7AC8D7BA80A0"
},
{
 "initialPosition": {
  "yaw": -50.37,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E309086E_AD82_B498_41E4_843B866D65E3"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_camera"
},
{
 "initialPosition": {
  "yaw": 68.08,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1DBF64A_AD82_BC98_41D4_6023A8569EF1"
},
{
 "initialPosition": {
  "yaw": -171.96,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E161A6BA_AD82_BDF9_41C8_38822303780D"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_camera"
},
{
 "initialPosition": {
  "yaw": -89.56,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E72E74A4_AD82_BD89_41E4_B733F4415855"
},
{
 "initialPosition": {
  "yaw": -157.77,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E2C8372E_AD82_BC99_41BD_E8E45B31DFD6"
},
{
 "initialPosition": {
  "yaw": -81.52,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6434423_AD82_BC8F_41E1_D11EB468E6E1"
},
{
 "initialPosition": {
  "yaw": 142.07,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E1E9A63A_AD82_BCF8_41DC_034228835CDF"
},
{
 "initialPosition": {
  "yaw": 93.2,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E28686FC_AD82_BD79_41E4_43EC3449A265"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1ED841E_AB83_98C4_41CD_649249221D46_camera"
},
{
 "initialPosition": {
  "yaw": 35.55,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E29436F0_AD82_BD89_41C5_48E7C1E24DAE"
},
{
 "initialPosition": {
  "yaw": -179,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E240879C_AD82_BBB9_41E2_0553E6A7A9C2"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D"
  },
  {
   "backwardYaw": 155.38,
   "yaw": -68.84,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E"
  },
  {
   "backwardYaw": -147.97,
   "yaw": 80.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B"
  }
 ],
 "label": "004",
 "id": "panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B2A0AE5A_AC8E_ACB9_41CA_CA31941A9547",
  "this.overlay_B318E900_AC8F_7489_41CD_E356E9F03EEE",
  "this.overlay_8D85354A_AC8E_9C99_41E2_B902B1B09AC0",
  "this.overlay_E87F65BB_AD8F_7FF8_41E2_3E912C6BD8AA",
  "this.overlay_E9BC2E1B_AD8E_ACBF_41C6_DBA16774A3DA",
  "this.overlay_E9E865C8_AD8E_9F99_41D2_486624340430",
  "this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -179.12,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3370810_AD82_B489_41DE_380E332F48B8"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.48,
   "yaw": 2.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937"
  }
 ],
 "label": "018",
 "id": "panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_80F88276_AC82_B489_41CC_7CEB61FF80B7",
  "this.overlay_E961DCFB_AD81_AD78_41E2_894016BA170F",
  "this.panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -96.85,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6BBE334_AD82_B489_41DA_769A37126133"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -72.73,
   "yaw": 15.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94"
  }
 ],
 "label": "048",
 "id": "panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BDBE1163_AB82_948F_41E2_3B872575B4B3",
  "this.overlay_EAEE3DE6_AD83_6F89_41BF_DC93DA4267D0",
  "this.panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 112.55,
   "yaw": -71.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D"
  },
  {
   "backwardYaw": -11.81,
   "yaw": 129.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1"
  },
  {
   "backwardYaw": 28.76,
   "yaw": 27.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B"
  },
  {
   "backwardYaw": -10.17,
   "yaw": -16.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EFA152_AB83_9B5D_41E5_060025188045"
  }
 ],
 "label": "023",
 "id": "panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_98FB33EF_AC83_BB97_41E2_63325ADA7F4E",
  "this.overlay_98A49279_AC83_7578_41D9_127BBB360C9C",
  "this.overlay_9B8759D5_AC81_B78B_41E0_10FACEC80A16",
  "this.overlay_EDEFFC68_AC8E_AC99_41D1_018B094532CC",
  "this.overlay_EA88878A_AD82_FB99_41E0_CCED2C073E9B",
  "this.overlay_EBE00636_AD81_7C89_41B2_8822670C9D77",
  "this.overlay_E96CA439_AD81_FCFB_41D5_B80FA078574E",
  "this.overlay_EAE629F1_AD81_F78B_41AE_FEB5E0A20D63",
  "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.88,
   "yaw": -1.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E"
  },
  {
   "backwardYaw": -81.65,
   "yaw": 83.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8"
  }
 ],
 "label": "033",
 "id": "panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_97D76E14_AC86_AC89_41C0_276C3B71D7DD",
  "this.overlay_91EF943A_AC83_BCF8_41A6_7FCD53C94D5D",
  "this.overlay_EA85E763_AD82_9C8F_41C5_C7E77E262B56",
  "this.overlay_EB9836C6_AD81_9D88_41E1_16BDA0B3572C",
  "this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -174.72,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E21CB751_AD82_BC88_41C4_6E807C0E59BD"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 98.48,
   "yaw": 100.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724"
  }
 ],
 "label": "011",
 "id": "panorama_A1ED841E_AB83_98C4_41CD_649249221D46",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_8A545D78_AC81_EF78_41C0_DEE12A66C752",
  "this.overlay_EA814D57_AD82_ACB7_41B0_57747EF8DE27",
  "this.panorama_A1ED841E_AB83_98C4_41CD_649249221D46_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -41.33,
   "yaw": -130.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774"
  }
 ],
 "label": "042",
 "id": "panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B97E4516_AB9E_FC89_41C9_DC920E187B81",
  "this.overlay_EA24B964_AD81_9489_41DE_826B33D9E576",
  "this.panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -128.88,
   "yaw": 105.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B"
  }
 ],
 "label": "029",
 "id": "panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_963DE33A_AC81_F4F8_41DC_EAB8C701F528",
  "this.overlay_EA9A29A1_AD82_F78B_41CA_6C5FE32A409C",
  "this.panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -176.46,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E7A6F43F_AD82_BCF7_41C2_8486C5055AD5"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_camera"
},
{
 "initialPosition": {
  "yaw": -24.62,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E7CCF48C_AD82_BD99_41AE_3F91A4759A62"
},
{
 "initialPosition": {
  "yaw": 98.6,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E68C9364_AD82_B489_41DA_5C8087DEB012"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -121.72,
   "yaw": 11.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B"
  },
  {
   "backwardYaw": 0.63,
   "yaw": -33.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94"
  },
  {
   "backwardYaw": 128.25,
   "yaw": 120.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3"
  }
 ],
 "label": "044",
 "id": "panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_B88D43F1_AB81_9B8A_41DD_C033DA525B2D",
  "this.overlay_B879DACB_AB81_959F_41E2_048F1A3A3223",
  "this.overlay_BFF46CCA_AB82_AD99_41DA_F9D722007150",
  "this.overlay_EAED9673_AD9E_FC8F_41E5_7BDE412DA5F3",
  "this.overlay_EA2E9545_AD9E_9C88_41E3_A92D4A8F61B3",
  "this.overlay_EB6C89BF_AD9F_77F7_41D2_3E990295F40A",
  "this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 101.24,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6E92387_AD82_BB97_41C7_B4D23FD6E4BD"
},
{
 "initialPosition": {
  "yaw": -157.26,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E010559A_AD82_BFB9_41E4_ED1D9AFAFD1C"
},
{
 "initialPosition": {
  "yaw": 42.71,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E701E4CA_AD82_BD99_41DB_BB2A9308BF2A"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 105.14,
   "yaw": -128.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81"
  },
  {
   "backwardYaw": 2.89,
   "yaw": -17.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0"
  },
  {
   "backwardYaw": 27.01,
   "yaw": 28.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29"
  }
 ],
 "label": "028",
 "id": "panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_9431A992_ACBE_B789_41E0_B7E932836722",
  "this.overlay_95ED9184_ACBF_9789_41D5_F47DADDD0668",
  "this.overlay_97CEBCFF_ACBE_AD77_41D2_860CE61DA5B2",
  "this.overlay_EABBC2D5_AD86_F58B_41A3_D58CBE3FDE67",
  "this.overlay_EBF4BCFD_AD81_6D7B_41D7_68C025A33E3E",
  "this.overlay_EB0F0BBB_AD81_6BFF_41B3_E579AAC170E1",
  "this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 107.27,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E0A53512_AD82_BC88_41E0_AAD6BA92BA28"
},
{
 "initialPosition": {
  "yaw": 116.06,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E3C70804_AD82_B489_41E1_30C43CDC8879"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -23.49,
   "yaw": 74.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B"
  },
  {
   "backwardYaw": 94.71,
   "yaw": -13.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724"
  }
 ],
 "label": "008",
 "id": "panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_8FAD848E_AC81_9D99_41DE_5B0A8BEDAE44",
  "this.overlay_8F88D61E_AC9E_9CB9_41DD_C6CBB202407E",
  "this.overlay_897AAEC0_AC81_6D89_41D3_FCE945374966",
  "this.overlay_E966B88D_AD8F_F59B_41D4_4CB96ABE290F",
  "this.overlay_EAD0E02F_AD8F_9498_41DB_3575DB1A86F2",
  "this.overlay_E4928836_AD8E_9489_41C8_D8590E953F32",
  "this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -172.71,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E045C5DD_AD82_BFBB_41E2_F3DDBDE0625A"
},
{
 "initialPosition": {
  "yaw": -168.32,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6DAD394_AD82_BB89_41B5_69890CF98FC5"
},
{
 "initialPosition": {
  "yaw": -93.96,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E71064BD_AD82_BDFB_41C6_320F110F4119"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.51,
   "yaw": -153.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EFF13D_AB83_98C7_41DB_844589577050"
  },
  {
   "backwardYaw": 3.54,
   "yaw": 86.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9"
  }
 ],
 "label": "015",
 "id": "panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_86EC4E34_AC81_6C89_41D7_37EA9C2A97F0",
  "this.overlay_804D2803_ACFE_F48F_41DF_EDE46BF6D972",
  "this.overlay_EABAE6A0_AD82_9D88_41D8_E09ACE94EF49",
  "this.overlay_EB30C33C_AD82_F4F9_41E2_02A663ED09D7",
  "this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -30.65,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E2B376DA_AD82_BDB9_41DE_2207BB98BA5E"
},
{
 "initialPosition": {
  "yaw": -67.45,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E36B98AC_AD82_B599_41B1_1C2123437BAB"
},
{
 "initialPosition": {
  "yaw": -164.3,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E05385D0_AD82_BF89_41D0_19BC17396C3E"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -74.11,
   "yaw": -9.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318"
  },
  {
   "backwardYaw": 106.89,
   "yaw": 144.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E"
  },
  {
   "backwardYaw": -78.76,
   "yaw": 85.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B"
  }
 ],
 "label": "005",
 "id": "panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_8C073C6D_AC81_AC9A_41CC_DFC0C69A1FA4",
  "this.overlay_8C63CC90_AC81_ED89_41E4_91C9C61C20CC",
  "this.overlay_8CB03A66_AC81_B489_41E1_BFFA780F7045",
  "this.overlay_E9BD6347_AD83_7497_41E3_10FA7B33ED4F",
  "this.overlay_E91917BF_AD83_BBF7_41E1_21E47C4E47D4",
  "this.overlay_E8F5F510_AD81_7C89_41DC_071EAA59EF22",
  "this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 177.61,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E22A2745_AD82_BC88_41C3_92AF3E1CEA32"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_camera"
},
{
 "initialPosition": {
  "yaw": 95.97,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E7DA647E_AD82_BD79_41AC_6491626782B8"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EFA152_AB83_9B5D_41E5_060025188045_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.45,
   "yaw": -10.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29"
  }
 ],
 "label": "027",
 "id": "panorama_A1EFA152_AB83_9B5D_41E5_060025188045",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_9BBC76DF_AC83_9DB8_41CA_B0602AF2D874",
  "this.overlay_EA8AABA8_AD87_6B99_41D3_ED849A79F497",
  "this.panorama_A1EFA152_AB83_9B5D_41E5_060025188045_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -146.96,
   "yaw": 35.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774"
  },
  {
   "backwardYaw": -144.45,
   "yaw": 84.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117"
  }
 ],
 "label": "040",
 "id": "panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BADE13D2_AB81_9B89_41E0_0151F6868BE6",
  "this.overlay_BAB425E3_AB81_9F8F_41E0_F0884C3CA496",
  "this.overlay_EAE4AEF3_AD81_AD88_41E2_6CFC2039C964",
  "this.overlay_EA057C3F_AD81_ECF7_41D5_A6EB00F55EB2",
  "this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -26.38,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6AFE33F_AD82_B4F7_41CE_636DE5479B61"
},
{
 "initialPosition": {
  "yaw": 170.7,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E563B307_AD82_B497_41BB_2CF7A041C122"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -47.73,
   "yaw": 41.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D"
  },
  {
   "backwardYaw": -130.38,
   "yaw": -41.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0"
  },
  {
   "backwardYaw": 35.05,
   "yaw": -146.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF"
  },
  {
   "backwardYaw": -84.03,
   "yaw": 153.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117"
  }
 ],
 "label": "041",
 "id": "panorama_A1E89E4D_AB82_E947_41E2_150915ABE774",
 "hfovMin": "112%",
 "overlays": [
  "this.overlay_BA70E554_AB82_9C89_41E3_FEFEDC8EDC50",
  "this.overlay_B9FE044E_AB81_BC99_41E3_FBC03C1D5C67",
  "this.overlay_B9421224_AB81_F488_41CD_0C03212FB08D",
  "this.overlay_B93365B1_AB81_BF88_41D6_89C4DE3A18D2",
  "this.overlay_EA1EEB3B_AD83_94FF_41B6_39D10680153B",
  "this.overlay_EA3A2121_AD83_B48B_41D6_9A070D4D458F",
  "this.overlay_E4B94F1E_AD82_ACB9_41D8_53B13BEC4420",
  "this.overlay_E52CA2B8_AD82_B5F9_41CA_36FAA0F6D42B",
  "this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_tcap0"
 ],
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -73.11,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E6F5137B_AD82_BB7F_41E2_D766D9573009"
},
{
 "initialPosition": {
  "yaw": -145.83,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5456327_AD82_B497_41BA_C820F7E3C05C"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_camera"
},
{
 "initialPosition": {
  "yaw": -51.75,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E0F9753B_AD82_BCFF_41CF_2D713506830D"
},
{
 "initialPosition": {
  "yaw": -163.17,
  "class": "PanoramaCameraPosition",
  "hfov": 120,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E71E54B0_AD82_BD89_41D4_DD679663D435"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "minWidth": 100,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#000000",
 "paddingLeft": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3, this.camera_E0E9754B_AD82_BC9F_41DA_052A2AECAD47); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0_HS_0_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -2.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.56,
   "hfov": 59.72
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_806B90A8_AC81_9599_41DE_4FDFFFDF7E85"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.31,
   "hfov": 8.03
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFF13D_AB83_98C7_41DB_844589577050_0_HS_1_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": -0.31,
   "yaw": -3.9,
   "hfov": 8.03
  }
 ],
 "id": "overlay_EA3B646F_AD82_BC97_41BF_AE59539660F7"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EFF13D_AB83_98C7_41DB_844589577050_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774, this.camera_E63CF3B1_AD82_BB8B_41BA_5122A46FE9D6); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0_HS_0_1_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -47.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.89,
   "hfov": 45.88
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B925A924_AB86_9489_41BF_6416844D88AF"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "yaw": -48.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.46,
   "hfov": 6.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_0_HS_1_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": -4.46,
   "yaw": -48.24,
   "hfov": 6.25
  }
 ],
 "id": "overlay_EB88AB9F_AD81_6BB7_41D4_43AE401E2766"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E, this.camera_E17016AE_AD82_BD99_41CE_ACB24D2D85C6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_00000.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "roll": 0,
   "yaw": 0,
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_00003.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_00004.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_0_00005.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": -90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  }
 ],
 "id": "overlay_81224ADE_AC87_95B9_41B4_F2C7A9DA4E76"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610, this.camera_E161A6BA_AD82_BDF9_41C8_38822303780D); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_1_1_6_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 164.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.14,
   "hfov": 30
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_1_0.png",
      "width": 349,
      "class": "ImageResourceLevel",
      "height": 1286
     }
    ]
   },
   "pitch": 1.14,
   "roll": 0,
   "yaw": 164.8,
   "hfov": 30
  }
 ],
 "id": "overlay_82B95642_AC86_FC88_41D7_E03D27F65425"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610, this.camera_E15216C5_AD82_BD8B_41E1_DD8EEE89643C); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_2_1_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -172.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.07,
   "hfov": 16.04
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_2_0.png",
      "width": 183,
      "class": "ImageResourceLevel",
      "height": 940
     }
    ]
   },
   "pitch": -5.07,
   "roll": 0,
   "yaw": -172.46,
   "hfov": 16.04
  }
 ],
 "id": "overlay_EF308C72_AC81_6C89_41E3_9D2E96CD0FFA"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -18.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.5,
   "hfov": 5.24
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C602C5_AD82_B588_41A2_A268967F5E18",
   "yaw": -18.78,
   "pitch": -13.5,
   "hfov": 5.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAADB68E_ADBE_9D99_41DC_66395456CCDD"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 158.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.98,
   "hfov": 5.34
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C652C5_AD82_B588_41CA_4B655A8CB0E7",
   "yaw": 158.83,
   "pitch": -7.98,
   "hfov": 5.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA3A13BE_ADBE_9BF9_4197_86E6EC07BDB6"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E, this.camera_E61E73C8_AD82_BB98_41D1_79B002DEE9D1); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_00000.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "roll": 0,
   "yaw": 0,
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_00001.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_00004.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_0_00005.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": -90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  }
 ],
 "id": "overlay_82E1D844_AC81_F488_41DC_048A6B82D667"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9, this.camera_E671C3ED_AD82_BB98_41C1_4DCFEF89D3B8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_1_00001.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "roll": 0,
   "yaw": 90,
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_1_00004.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_1_00005.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": -90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  }
 ],
 "id": "overlay_82AE77EE_AC81_BB99_41B3_37E58A22EEA7"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E, this.camera_E60E23D5_AD82_BB88_41E1_0018C14FDE7E); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_2_1_6_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -154.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.12,
   "hfov": 61.81
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_2_0.png",
      "width": 739,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": -10.12,
   "roll": 0,
   "yaw": -154.63,
   "hfov": 61.81
  }
 ],
 "id": "overlay_83533970_AC81_7489_41E1_1B7D8488B5CA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E, this.camera_E60053E0_AD82_BB88_41D3_161775D242E2); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_3_1_6_map.gif",
      "width": 31,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 165.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.7,
   "hfov": 30.33
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_3_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 2.7,
   "roll": 0,
   "yaw": 165.43,
   "hfov": 30.33
  }
 ],
 "id": "overlay_8305CFD6_AC82_AB89_41D0_7FB5635BF1AD"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.89,
   "hfov": 4.88
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C5D2C6_AD82_B588_41E5_2E531FA57C12",
   "yaw": 92.26,
   "pitch": -3.89,
   "hfov": 4.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA2E7CED_ADBF_AD9B_41D7_628AC099335B"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.15,
   "hfov": 4.37
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C5E2C6_AD82_B588_41E0_36B08A5ADC63",
   "yaw": 3.07,
   "pitch": -5.15,
   "hfov": 4.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA484D9E_ADBF_6FB9_41E0_C96E1AA3D974"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -173.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.94,
   "hfov": 4.75
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C432C6_AD82_B588_41D8_011F55E829DD",
   "yaw": -173.28,
   "pitch": -13.94,
   "hfov": 4.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB91D09A_ADBE_95B9_41D2_A6D30E2681F9"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1, this.camera_E797144B_AD82_BC9F_41E2_61D9479D28FC); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0_HS_0_1_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -2.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.32,
   "hfov": 55.33
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_972F3051_AC81_B48B_41C6_994141A76C7C"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.45,
   "hfov": 6.76
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E537D2CE_AD82_B598_41E0_E2E8F714285E",
   "yaw": -1.76,
   "pitch": -3.45,
   "hfov": 6.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA8D0F44_AD82_EC89_41DC_DB11350E803D"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B, this.camera_E3C70804_AD82_B489_41E1_30C43CDC8879); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0_HS_0_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 2.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.83,
   "hfov": 63.41
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BEBAA56A_AB8E_FC99_419A_D553B70E35D3"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.54,
   "hfov": 7.74
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_0_HS_1_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 93
     }
    ]
   },
   "pitch": -0.54,
   "yaw": 2.24,
   "hfov": 7.74
  }
 ],
 "id": "overlay_EAEBB0D9_AD81_B5BB_41E0_02C2E6A5C4C6"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D, this.camera_E563B307_AD82_B497_41BB_2CF7A041C122); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0_HS_0_1_0_map.gif",
      "width": 177,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -74.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.01,
   "hfov": 75.88
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8CF05D9F_AC81_6FB7_41B3_92222E72AEA5"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -89.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.01,
   "hfov": 5.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEB3470_AD81_9C89_41DF_69FB4AB0C9D0",
   "yaw": -89.37,
   "pitch": -2.01,
   "hfov": 5.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9BB58B0_AD81_7589_41D9_04A167636E4F"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D, this.camera_E01E358E_AD82_BF99_41C8_521A61F9694E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_0_1_0_map.gif",
      "width": 164,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -78.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.37,
   "hfov": 69.54
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8D03383E_AC81_74F8_41E3_188597A336DA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E, this.camera_E03C9574_AD82_BC89_41D0_9BE6FF0EBF8D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_1_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -147.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.24,
   "hfov": 79.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8D4BC620_AC82_BC89_41E0_A78EAA079345"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21, this.camera_E0CCC568_AD82_BC99_41CB_89E59D5F7AEA); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_2_1_0_map.gif",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -23.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.88,
   "hfov": 39.66
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8D8DCE0E_AC82_EC99_41C9_7DDA95E364AF"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E, this.camera_E02EB581_AD82_BF8B_41D3_44CF018CEAB0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_3_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 149.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.8,
   "hfov": 69.06
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8DDF3616_AC82_9C89_41DB_4283474339B3"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D, this.camera_E010559A_AD82_BFB9_41E4_ED1D9AFAFD1C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_4_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 22.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.16,
   "hfov": 48.26
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_88A8C800_AC81_9489_41D2_1355A58C8CE4"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -14.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.47,
   "hfov": 3.93
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEA5470_AD81_9C89_41BB_02E41A198330",
   "yaw": -14.68,
   "pitch": -4.47,
   "hfov": 3.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9824C59_AD87_ACBB_41E3_E60C980E776D"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 14.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.33,
   "hfov": 3.93
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDE98471_AD81_9C8B_41DC_CCE31F0B4DDA",
   "yaw": 14.65,
   "pitch": -3.33,
   "hfov": 3.93,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9DFD1FD_AD87_F77B_41E4_E3E35C755CFB"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 160.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.65,
   "hfov": 4.36
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDE9C471_AD81_9C8B_41D3_11FD57C399AE",
   "yaw": 160.09,
   "pitch": -6.65,
   "hfov": 4.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9F7A75F_AD87_9CB7_41BD_CB721AA9C8E0"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -76.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.4,
   "hfov": 4.37
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDE91471_AD81_9C8B_41C0_9DED2DAB4A64",
   "yaw": -76.31,
   "pitch": -5.4,
   "hfov": 4.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9662E98_AD87_6DB9_41CD_CC7EF24522F3"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -168.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.66,
   "hfov": 4.35
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDE8A471_AD81_9C8B_41D5_BA915E42FF5B",
   "yaw": -168.51,
   "pitch": -7.66,
   "hfov": 4.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAD6E56A_AD86_9C98_41D9_4125B426DC10"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29, this.camera_E309086E_AD82_B498_41E4_843B866D65E3); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0_HS_0_1_0_map.gif",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -11.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.45,
   "hfov": 38.16
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_96817678_AC83_FD79_41B6_6187882CD061"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F, this.camera_E37BB88F_AD82_B598_41E1_EF32907D834B); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0_HS_1_1_0_map.gif",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -164.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.23,
   "hfov": 33.11
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_ED929EBC_AC8E_ADF8_41E0_CEB4E2C7630D"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -13.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.08,
   "hfov": 6.01
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53712CE_AD82_B598_41CD_0CAF2EB0CE2C",
   "yaw": -13.44,
   "pitch": -4.08,
   "hfov": 6.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA9E12D2_AD83_F588_41E1_E99AFCE9FBE2"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -166.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.94,
   "hfov": 7.47
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0_HS_3_0.png",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": -4.94,
   "yaw": -166.2,
   "hfov": 7.47
  }
 ],
 "id": "overlay_EBBE4301_AD83_9488_41CB_9BE1FB426C84"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0, this.camera_E3F497D5_AD82_BB8B_41D8_96281FBE0228); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_0_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 123.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.25,
   "hfov": 37.64
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_84AAF323_AC83_B488_41E3_45A74E5E9175"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937, this.camera_E3A287B4_AD82_BB89_41DF_5E1B2C37B071); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_1_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -89.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12,
   "hfov": 39.05
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_85DF4961_AC82_B48B_41E1_6825F24E7415"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9, this.camera_E384C7CB_AD82_BB9F_41DB_05C49952E3D8); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_2_1_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 16.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.69,
   "hfov": 40.43
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_85CEEF21_AC86_EC8B_41D1_8018BCD449C6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B, this.camera_E39357BF_AD82_BBF7_4193_494D209F7FCE); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_3_1_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 64.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.73,
   "hfov": 52.79
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9376D088_AC8E_B599_41DF_E231EBDAA61F"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 64.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.69,
   "hfov": 6.27
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CC82C1_AD82_B588_41DE_C671AB8D661B",
   "yaw": 64.31,
   "pitch": 0.69,
   "hfov": 6.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EADFA22E_AD86_9499_41E3_53021999F0BC"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 119.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.83,
   "hfov": 6.26
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CCC2C1_AD82_B588_4193_96B5EC9E00E8",
   "yaw": 119.58,
   "pitch": -3.83,
   "hfov": 6.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE3C16E_AD87_7498_41DA_40CB23B98857"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -89.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.57,
   "hfov": 6.27
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CB02C1_AD82_B588_418A_8F3AF0EA0D83",
   "yaw": -89.44,
   "pitch": -2.57,
   "hfov": 6.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA17D4D6_AD87_7D89_41DF_2FA59DDD7A42"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 22.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.62,
   "hfov": 4.64
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CB42C1_AD82_B588_41E5_1A638E726A00",
   "yaw": 22.29,
   "pitch": -0.62,
   "hfov": 4.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4B53B9A_AD87_ABB9_41E3_AA1B8E69A88E"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117, this.camera_E551E31C_AD82_B4B9_418B_D13EF441AC93); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_0_1_0_map.gif",
      "width": 147,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.14,
   "hfov": 53.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_A5FEF3CF_AB82_9B97_41DC_74AC015262C0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1, this.camera_E5456327_AD82_B497_41BA_C820F7E3C05C); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_1_1_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 53.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.05,
   "hfov": 76.26
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_A62975B6_AB82_FF88_41D1_6F1C06FC55F2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32, this.camera_E55BD312_AD82_B489_41D2_EF50D442300E); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_2_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 128.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.57,
   "hfov": 47.29
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_A5E565B2_AB82_BF89_41C5_1446538094F4"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 48.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.72,
   "hfov": 15.39
  }
 ],
 "data": {
  "label": "Arrow 02b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53352D2_AD82_B588_418F_1446E711041A",
   "yaw": 48.36,
   "pitch": -31.72,
   "hfov": 15.39,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E5F5C535_AD83_9C8B_41D6_C55D50D74D29"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 129.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.77,
   "hfov": 5.12
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53382D2_AD82_B588_41E2_949E3996298F",
   "yaw": 129.06,
   "pitch": -4.77,
   "hfov": 5.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE6ABDE_AD83_ABB9_41D0_9D2FAEA25891"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.2,
   "hfov": 7.76
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E533A2D2_AD82_B588_41E5_9797414C6BBD",
   "yaw": -1.76,
   "pitch": -4.2,
   "hfov": 7.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB5F9AFE_AD82_9579_41BF_9FDFD29FF04A"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610, this.camera_E72E74A4_AD82_BD89_41E4_B733F4415855); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_859F42AD_AC86_F59B_41E4_8D6D8BB4A4A0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D, this.camera_E71E54B0_AD82_BD89_41D4_DD679663D435); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_1_1_6_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -55.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.22,
   "hfov": 70.92
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_85E044B7_AC86_BDF7_41E3_37F15A9C97A5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3, this.camera_E71064BD_AD82_BDFB_41C6_320F110F4119); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_2_1_6_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 3.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.87,
   "hfov": 59.31
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_865C2DED_AC81_AF9B_41E0_9D873B3FD694"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.65,
   "hfov": 4.86
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C912C2_AD82_B588_41E0_B5D057114AED",
   "yaw": -5.25,
   "pitch": -6.65,
   "hfov": 4.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA8BAABC_AD81_95F8_41B1_51C6D8F4439A"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 48.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.04,
   "hfov": 4.83
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C922C2_AD82_B588_41DF_9D2D17B4B3D9",
   "yaw": 48.04,
   "pitch": -9.04,
   "hfov": 4.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EACDAB2C_AD81_B499_41E3_11116AF4128A"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -74.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.52,
   "hfov": 4.87
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C992C3_AD82_B588_41E1_EBD7C82A53F3",
   "yaw": -74.3,
   "pitch": -5.52,
   "hfov": 4.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAC1416B_AD81_949F_41E3_0949A19CF98A"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D, this.camera_E653B417_AD82_BCB7_41D7_CC808EA7D66B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0_HS_0_1_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 3.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.34,
   "hfov": 43.78
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_93E4CEE6_AC81_ED89_41E0_67C6FFC40F6A"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.96,
   "hfov": 6.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CBC2C2_AD82_B588_41DE_CB46902EB01A",
   "yaw": 5.27,
   "pitch": -4.96,
   "hfov": 6.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA866C54_AD86_EC89_41E2_B69C605526D8"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3, this.camera_E74574F9_AD82_BD78_41CE_EEF671BAF3AE); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0_HS_0_1_0_map.gif",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 34.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.88,
   "hfov": 67.74
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_910CC857_AC82_9488_41D4_C58BDB5D403B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E, this.camera_E75384ED_AD82_BD98_41AF_9D666E1A7E67); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0_HS_1_1_0_map.gif",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -37.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.59,
   "hfov": 98.12
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_91D30BDD_AC81_6BB8_4169_7CCA54F155E5"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.84,
   "hfov": 15.33
  }
 ],
 "data": {
  "label": "Arrow 04a"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53502D0_AD82_B588_41E2_ECD52AD36519",
   "yaw": -10,
   "pitch": -5.84,
   "hfov": 15.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E97BC508_AD8F_FC99_41D6_413E91FC7187"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 35.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.92,
   "hfov": 9.26
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53542D0_AD82_B588_41CF_ACF2952C3C69",
   "yaw": 35.17,
   "pitch": -47.92,
   "hfov": 9.26,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E5C486DD_AD81_BDBB_41E2_407266A910A5"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32, this.camera_E06395BF_AD82_BFF7_41D3_0ADFC4A81F27); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_0_1_0_map.gif",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.16,
   "hfov": 36.48
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BEA81E6A_AB8F_AC99_41B0_C1DECA6371D2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31, this.camera_E045C5DD_AD82_BFBB_41E2_F3DDBDE0625A); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_1_1_0_map.gif",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 95.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.19,
   "hfov": 98.16
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BD0DFCCB_AB82_ED9F_41B6_D9C61FD39238"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030, this.camera_E05385D0_AD82_BF89_41D0_19BC17396C3E); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BE47D6D4_AB83_9D89_41CD_1AA440A0F8D1"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.96,
   "hfov": 5.49
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E527F2DA_AD82_B5B8_41DD_DB329B8F162D",
   "yaw": 0.37,
   "pitch": -5.96,
   "hfov": 5.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE74EFD_AD81_ED7B_418E_68F622C20D80"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -57.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.17,
   "hfov": 5.54
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52632DA_AD82_B5B8_41D4_450B9812524F",
   "yaw": -57.6,
   "pitch": -11.17,
   "hfov": 5.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBE5A4C3_AD81_7D88_41E1_DEA4DC96AB1E"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 95.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.23,
   "hfov": 5.45
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52662DA_AD82_B5B8_419C_78EB49DFC744",
   "yaw": 95.33,
   "pitch": -9.23,
   "hfov": 5.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E97F3BA4_AD82_AB88_41B4_B8ECB95978BF"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49, this.camera_E240879C_AD82_BBB9_41E2_0553E6A7A9C2); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_0_1_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 37.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.5,
   "hfov": 39.83
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8AAEDEF7_AC8F_6D88_41A1_DFCB52490E4F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D, this.camera_E250A78F_AD82_BB97_41E0_8291D4B23D9A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_1_1_0_map.gif",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 4.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.69,
   "hfov": 32.43
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_842B3AFE_AC8F_B578_41DD_3B9DE7E90FA8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724, this.camera_E3B2A7A9_AD82_BB9B_41D6_90A3F4C5750F); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_2_1_0_map.gif",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -80.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.68,
   "hfov": 106.61
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_86F2DB0F_AC81_9497_41A7_90D497128589"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 4.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.32,
   "hfov": 5.51
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CEC2C0_AD82_B588_41E4_7A15E25B4ED1",
   "yaw": 4.39,
   "pitch": -2.32,
   "hfov": 5.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA9698CD_AD81_959B_41D6_C910BEC52B4A"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 34.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.69,
   "hfov": 6.77
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CD02C0_AD82_B588_41DC_9DD3F23108E6",
   "yaw": 34.92,
   "pitch": -1.69,
   "hfov": 6.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAD2D9A5_AD81_B788_41E3_6F1BD909A484"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -102.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.01,
   "hfov": 4.13
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CD42C0_AD82_B588_41D3_5DDD1319DE1C",
   "yaw": -102.31,
   "pitch": -3.01,
   "hfov": 4.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E41EB152_AD86_B489_41C6_074AAD3C8E14"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D, this.camera_E3E6F7E1_AD82_BB8B_41E0_958332FA1C8E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0_HS_0_1_0_map.gif",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -0.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.7,
   "hfov": 38.76
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_806886F9_AC82_FD7B_41DB_006405694EF2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842, this.camera_E3D6C7EC_AD82_BB99_41DE_04E964EB9F2B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0_HS_1_1_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -149.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.63,
   "hfov": 25.32
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_80BF4CD2_AC81_ED89_41DA_861EF27EC69B"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.07,
   "hfov": 5.77
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C852C4_AD82_B588_41A1_94EB3431948E",
   "yaw": -0.76,
   "pitch": 0.07,
   "hfov": 5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA8DD042_AD83_7489_418E_9C026D0D70BF"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "yaw": -151.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.32,
   "hfov": 6.46
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0_HS_3_0.png",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -5.32,
   "yaw": -151.13,
   "hfov": 6.46
  }
 ],
 "id": "overlay_EAE52EAB_AD81_AD9E_41B5_77CED78D376A"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB6D00_AB82_A8BD_41E1_330EFC489ED8, this.camera_E6CCE3A3_AD82_BB8F_41E4_36A02F28F6A0); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0_HS_0_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -63.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.37,
   "hfov": 36.98
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BF696202_AB82_B489_41D0_B9DCE13E4D32"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32, this.camera_E6DAD394_AD82_BB89_41B5_69890CF98FC5); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0_HS_1_1_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -121.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12,
   "hfov": 43.56
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BF2946B1_AB81_7D8B_41E0_AF9953B59018"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -62.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.68,
   "hfov": 8.48
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0_HS_2_0.png",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": -3.68,
   "yaw": -62.2,
   "hfov": 8.48
  }
 ],
 "id": "overlay_EAC880DA_AD9E_95B8_41E3_B57776D23F67"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -119.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.96,
   "hfov": 7.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52742D9_AD82_B5B8_41DD_2A2236EDE31D",
   "yaw": -119.84,
   "pitch": -4.96,
   "hfov": 7.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA26048F_AD9E_9D97_41DF_CFEF95D9A5B4"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB, this.camera_E1F9F62A_AD82_BC98_4196_599AC4347249); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_0_1_0_map.gif",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.66,
   "hfov": 35.88
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9CF84B87_AC8E_AB97_41E4_71E9DCF6DC62"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D, this.camera_E1DBF64A_AD82_BC98_41D4_6023A8569EF1); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_1_1_0_map.gif",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -137.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.25,
   "hfov": 92.32
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9D4DB306_AC8E_B489_41E1_E41E86423CAB"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1, this.camera_E1E9A63A_AD82_BCF8_41DC_034228835CDF); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_2_1_0_map.gif",
      "width": 154,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -53.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.03,
   "hfov": 84.06
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9D2349F1_AC8F_B78B_41DA_9B42644E54D8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610, this.camera_E188261A_AD82_BCB8_41E3_D9109F49DE8F); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_3_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 33.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.28,
   "hfov": 32.38
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9E04DB91_AC86_AB88_41A2_DF04EC4E96B7"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -110.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.53,
   "hfov": 4.36
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C3A2C7_AD82_B588_41D1_9DC0369FB53F",
   "yaw": -110.98,
   "pitch": -6.53,
   "hfov": 4.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EABC2CEA_ADBE_AD99_41D3_CEC62E907B50"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.79,
   "hfov": 4.32
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C3E2C7_AD82_B588_41C6_94347E3D943E",
   "yaw": 30.71,
   "pitch": -9.79,
   "hfov": 4.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAC45897_AD81_95B7_41C4_64A063BA76ED"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.07,
   "hfov": 5.52
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C222C7_AD82_B588_41E4_C767223D4D2C",
   "yaw": 1.63,
   "pitch": -2.07,
   "hfov": 5.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB6A56B1_AD81_9D8B_41D5_3A691F473327"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_7_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -31.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.38,
   "hfov": 11.85
  }
 ],
 "data": {
  "label": "Arrow 02c Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C262C7_AD82_B588_41C9_20F31C19ADAD",
   "yaw": -31.4,
   "pitch": -39.38,
   "hfov": 11.85,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA5B530E_AD82_F499_41E3_F7310AE89BAD"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E, this.camera_E2F63707_AD82_BC97_41D9_E9D4188394B6); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_0_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -54.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.08,
   "hfov": 51.35
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B2A4A42F_AB86_BC98_41D9_A06106679007"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980, this.camera_E28686FC_AD82_BD79_41E4_43EC3449A265); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_1_1_0_map.gif",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 5.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.9,
   "hfov": 71.42
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BDA1C239_AB86_94F8_41E2_7A8B4C82C8C0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_2_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 53.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.69,
   "hfov": 30.61
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BCFBB726_AB86_9C88_41E1_F74A6AB539CF"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E, this.camera_E2E80712_AD82_BC89_419D_FD3AE02257A2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_00001.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "roll": 0,
   "yaw": 90,
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_00002.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_00004.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_3_00005.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": -90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  }
 ],
 "id": "overlay_BCBA225F_AB87_B4B7_41D2_69582A894BD2"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.06,
   "hfov": 4.83
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDD2D46C_AD81_9C99_41E2_CC74574318F1",
   "yaw": 6.42,
   "pitch": -9.06,
   "hfov": 4.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8B18C28_AD82_EC98_41CC_41073BEE395B"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 44.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.42,
   "hfov": 3.92
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDD2746C_AD81_9C99_41E2_6802E6E84A30",
   "yaw": 44.9,
   "pitch": -7.42,
   "hfov": 3.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9C21195_AD83_778B_41D1_CAE83FB80E05"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -66.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.13,
   "hfov": 4.88
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDD1846C_AD81_9C99_41D0_30D765A4EC19",
   "yaw": -66.79,
   "pitch": -4.13,
   "hfov": 4.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E915E64A_AD83_BC99_41B9_F8DEF8664C9E"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 163.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.13,
   "hfov": 4.74
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDD1D46D_AD81_9C9B_418F_A63E8DD024FF",
   "yaw": 163.4,
   "pitch": -14.13,
   "hfov": 4.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EABD232B_AD83_949F_41BB_8CD988461ED2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D, this.camera_E2D8571F_AD82_BCB7_41E0_3426E8FED341); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_8_1_6_map.gif",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "yaw": 106.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.22,
   "hfov": 44.95
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_EAB1F914_AD9E_B489_41AB_D34A5F444B2D"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_9_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 108.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.69,
   "hfov": 4.12
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5DB72B8_AD82_B5F8_41E3_964BBB274965",
   "yaw": 108.26,
   "pitch": -4.69,
   "hfov": 4.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4A9AD9C_AD9E_AFB9_41D8_1A805B378A5A"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427, this.camera_E2B376DA_AD82_BDB9_41DE_2207BB98BA5E); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_947A7D4B_AC82_AC9F_41DE_39279B9AAC48"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.39,
   "hfov": 4.88
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53C82CB_AD82_B598_41B1_963B8D879C81",
   "yaw": 3.32,
   "pitch": -4.39,
   "hfov": 4.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE4D157_AD87_F4B7_41E1_E46856589676"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117, this.camera_E25E3785_AD82_BB88_41C4_A0BB71A5E76E); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_00000.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "roll": 0,
   "yaw": 0,
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_00002.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_00003.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 0,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_00004.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_0_00005.png",
      "width": 648,
      "class": "ImageResourceLevel",
      "height": 648
     }
    ]
   },
   "pitch": -90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 90
  }
 ],
 "id": "overlay_BBF49253_AB82_948F_41DB_F934E20DAFC0"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -25.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.8,
   "hfov": 5.54
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52F02D4_AD82_B588_41B4_1AA047799DB4",
   "yaw": -25.69,
   "pitch": -10.8,
   "hfov": 5.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAF62099_AD86_B5BB_41E4_4DFA7EAC36B6"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980, this.camera_E0DB655A_AD82_BCB9_41E0_19433ADB6D1A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0_HS_0_1_0_map.gif",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 7.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.75,
   "hfov": 113.11
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B1080304_AC82_9489_41D7_5DB1A778F273"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0_HS_1_1_0_map.gif",
      "width": 182,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -87.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.5,
   "hfov": 82.4
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B196D04E_AC81_9499_41D6_9A05B0D3C3BD"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 3.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.16,
   "hfov": 3.34
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEF746E_AD81_9C99_41DB_0EAE3259A55E",
   "yaw": 3.07,
   "pitch": -9.16,
   "hfov": 3.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E86BE86E_AD81_9498_41E2_C2B8C1BBCA51"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -70.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.43,
   "hfov": 3.11
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEEA46E_AD81_9C99_41DD_7AFD05B148C4",
   "yaw": -70.42,
   "pitch": -7.43,
   "hfov": 3.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9A0B20B_AD81_9498_41E4_E642ECBDD788"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0, this.camera_FCAEC905_AD82_B48B_41DF_C3D4E2E2C11A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0_HS_0_1_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.9,
   "hfov": 54.05
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_92F5CF23_AC8F_6C8F_41B9_D858CFF52F3E"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.77,
   "hfov": 7.86
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E535E2D1_AD82_B588_41CF_CA8853BE4DCD",
   "yaw": 2.07,
   "pitch": -5.77,
   "hfov": 7.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB85E0FA_AD82_B579_41E2_7646FDE8F55E"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B, this.camera_E2C8372E_AD82_BC99_41BD_E8E45B31DFD6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_0_1_0_map.gif",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 22.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.62,
   "hfov": 50.45
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_885C554C_AC9E_9C99_41E4_5B4D973FFE5A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21, this.camera_E23A473A_AD82_BCF9_418E_0FC25DA2477C); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_1_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_1_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_88E2576E_AC9E_9C99_41E4_D486CC4F8319"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724, this.camera_E22A2745_AD82_BC88_41C3_92AF3E1CEA32); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_2_1_6_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -17.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13,
   "hfov": 22.05
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_897FAB8E_AC82_EB99_41E4_E51830231042"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -19.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.36,
   "hfov": 6.17
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D132BE_AD82_B5F8_41E4_69C3C1BF4C2B",
   "yaw": -19.85,
   "pitch": -10.36,
   "hfov": 6.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAC05562_AD81_9C89_41C2_97CAC77C9C06"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 21.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.53,
   "hfov": 4.61
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D152BE_AD82_B5F8_41E5_52903D893FE9",
   "yaw": 21.29,
   "pitch": -6.53,
   "hfov": 4.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBCB9540_AD81_BC89_41E3_107C08850DA1"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 117,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.05,
   "hfov": 6.03
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D192BE_AD82_B5F8_41B1_7A8BA8932110",
   "yaw": 117,
   "pitch": -11.05,
   "hfov": 6.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB4121E6_AD81_7788_41D9_414BE4C2AF78"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C, this.camera_E1CBD658_AD82_BCB9_41CB_45B1B41935D8); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9A3755D0_AC9E_9F89_41E4_1124C48169AA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C, this.camera_E13DE66B_AD82_BC9F_41DA_4AD7C4F69FCA); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_1_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_1_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_1_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9B949D1F_AC81_6CB7_41C4_0EEA6CC21D87"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D, this.camera_E12C1679_AD82_BD7B_41CA_BBE991CE5C35); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_2_1_6_map.gif",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "yaw": -5.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.77,
   "hfov": 30.8
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_95D66029_AC81_749B_41AE_C83BC8953491"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.08,
   "hfov": 5
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53DD2CB_AD82_B598_41CE_5E87E03688CF",
   "yaw": -5.15,
   "pitch": -5.08,
   "hfov": 5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA947A37_AD86_B4F7_41B6_EB705EEDE388"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -173.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.18,
   "hfov": 6.01
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53DF2CB_AD82_B598_41C3_352934CEA3BB",
   "yaw": -173.41,
   "pitch": -12.18,
   "hfov": 6.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB8C9CF5_AD86_AD8B_41B9_68C0465044A7"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B, this.camera_E3190846_AD82_B489_41E2_198D74445F2A); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0_HS_0_1_0_map.gif",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 2.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.84,
   "hfov": 58.08
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_96050361_AC82_9488_41DA_3D7ABB4B3898"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "yaw": 4.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.05,
   "hfov": 7.99
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_0_HS_1_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -2.05,
   "yaw": 4.37,
   "hfov": 7.99
  }
 ],
 "id": "overlay_EA9799EA_AD83_7799_41E5_4F8BDCA4E255"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC, this.camera_E20C5761_AD82_BC88_41E1_7F448AA6354C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_0_1_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -150.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.95,
   "hfov": 73.94
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B438EBD5_AC82_EB8B_41B8_75BD545956C0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E, this.camera_E21CB751_AD82_BC88_41C4_6E807C0E59BD); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ]
   },
   "yaw": -86.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.44,
   "hfov": 67.6
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B471F4F6_AC82_BD88_41E4_95AF02D17512"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_2_1_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -41.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.82,
   "hfov": 21.83
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B4D21A6F_AC83_9497_41D8_75CE12A2DF14"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC, this.camera_E27E876D_AD82_BC98_41E2_707B7BD5ECEE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_3_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 145.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.22,
   "hfov": 68.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B59E6A8A_AC81_9599_41E0_7D990536D7F3"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -169.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.58,
   "hfov": 4.62
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5DA82B9_AD82_B5F8_41B1_3A638605A200",
   "yaw": -169.65,
   "pitch": -6.58,
   "hfov": 4.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8622BBE_AD82_EBF8_41E1_5E1A49E0DB1B"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -83.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.31,
   "hfov": 3.08
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDD0646D_AD81_9C9B_41C1_9C751469A16A",
   "yaw": -83.97,
   "pitch": -7.31,
   "hfov": 3.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9FF9361_AD82_948B_41C0_34057476012F"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -42.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.08,
   "hfov": 4.13
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEF846D_AD81_9C9B_4195_65807E7422EB",
   "yaw": -42.32,
   "pitch": -5.08,
   "hfov": 4.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E94AF0F4_AD81_9588_41D0_67D0DC8B914F"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE, this.camera_E68C9364_AD82_B489_41DA_5C8087DEB012); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BB636139_AB87_94F8_41E5_709F1EC43920"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3, this.camera_E6988356_AD82_B489_41DF_8942389C472C); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_1_1_6_map.gif",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 3.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.94,
   "hfov": 27.78
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BAF6379D_AB87_9BB8_41A0_B7B8B4E55FEA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF, this.camera_E6A4B34B_AD82_B49F_41D0_036B0FCCD402); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_2_1_6_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -144.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.98,
   "hfov": 101.66
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_A43BE6C7_AB86_9D88_41BB_3DF44365A403"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774, this.camera_E6AFE33F_AD82_B4F7_41CE_636DE5479B61); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_3_1_6_map.gif",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -84.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.14,
   "hfov": 33.67
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_A4533250_AB86_9488_41E3_0BB8586AB49A"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -165.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.65,
   "hfov": 5.36
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53192D3_AD82_B588_41CE_ACEE4C44FA1E",
   "yaw": -165.25,
   "pitch": -6.65,
   "hfov": 5.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EACF9E04_AD81_AC88_41D4_833AFE216626"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -95.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.15,
   "hfov": 4.87
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E531A2D4_AD82_B588_41D6_064CB7D9BD18",
   "yaw": -95.66,
   "pitch": -5.15,
   "hfov": 4.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA7C14CD_AD86_9D98_41A4_7467D8F67787"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 39.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.96,
   "hfov": 5.5
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E531E2D4_AD82_B588_41AB_04075D58293C",
   "yaw": 39.73,
   "pitch": -12.96,
   "hfov": 5.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBDAC53F_AD86_FCF7_41E1_957F24948C87"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_7_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.34,
   "hfov": 5.24
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53042D4_AD82_B588_41D0_3ECAD7D9E827",
   "yaw": 5.02,
   "pitch": -6.34,
   "hfov": 5.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAC7EA7F_AD86_9577_4194_4B1A489FC836"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D, this.camera_E11E9686_AD82_BD89_41E3_215519A9AFA1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_0_1_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -2.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.7,
   "hfov": 47.53
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_89A573FB_AC83_7B7F_41C8_D7A71721817F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED841E_AB83_98C4_41CD_649249221D46, this.camera_E10E0693_AD82_BD8F_4177_A705AC8361A2); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_1_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_1_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_1_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_1_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8AFCFD17_AC83_ACB7_41DF_0B152C28A62F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0, this.camera_E17FC69F_AD82_BDB7_41DE_A8D95A816B9E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_2_1_6_map.gif",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -96.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.86,
   "hfov": 91.28
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8AF373C2_AC82_9B88_41DE_1CA946D96410"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.07,
   "hfov": 7.02
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D082BE_AD82_B5F8_41DC_388BD20CF876",
   "yaw": -3.4,
   "pitch": -3.07,
   "hfov": 7.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA82DEE2_AD83_6D88_41E1_59E3A278F852"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 71.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.16,
   "hfov": 5.09
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D0F2BE_AD82_B5F9_41CB_05655EAA64AA",
   "yaw": 71.78,
   "pitch": -8.16,
   "hfov": 5.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA41EC50_AD83_AC89_41E2_1CB1CF91F5F8"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -104.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.4,
   "hfov": 5.11
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CF02BF_AD82_B5F8_417C_3879975CD460",
   "yaw": -104.32,
   "pitch": -6.4,
   "hfov": 5.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBC47461_AD83_FC88_41DF_B6F715709A49"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94, this.camera_E66213F7_AD82_BB88_41D5_9206BC385981); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BDB42D28_AB81_AC99_41E2_5C2BE8889446"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.09,
   "hfov": 5.98
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E525E2DB_AD82_B5B8_41E0_24873017D99D",
   "yaw": 5.4,
   "pitch": -7.09,
   "hfov": 5.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA28154D_AD83_BC98_41A4_F65144D82C41"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB, this.camera_E6BBE334_AD82_B489_41DA_769A37126133); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_91639620_AC82_9C89_41C9_418E1D88E8D0"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -49.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.8,
   "hfov": 4.8
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53632D0_AD82_B588_41E1_4E596AE35667",
   "yaw": -49.18,
   "pitch": -10.8,
   "hfov": 4.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE3B949_AD81_9498_41E0_3E03817D7EA3"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E, this.camera_E701E4CA_AD82_BD99_41DB_BB2A9308BF2A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_0_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -111.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.05,
   "hfov": 91.63
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9EE84C35_AC81_EC8B_41E2_A98C1E9DC491"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427, this.camera_E763C4E2_AD82_BD89_41CA_F224A35E8A45); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_1_1_0_map.gif",
      "width": 113,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 37.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.47,
   "hfov": 41.68
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9EBEA23B_AC81_94FF_41D2_280BFB2ACBF7"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29, this.camera_E771A4D6_AD82_BD89_41D7_76EBFD7A5176); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_2_1_0_map.gif",
      "width": 147,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 112.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4,
   "hfov": 68.16
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9F677FC6_AC82_AB89_41D4_446717C96BD1"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -118.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.89,
   "hfov": 4.87
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C1B2C8_AD82_B598_41C9_BB7E1F5234CA",
   "yaw": -118.77,
   "pitch": -4.89,
   "hfov": 4.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA85454A_AD83_9C99_41C1_1787ABA43508"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 120.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.39,
   "hfov": 4.88
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C1C2C8_AD82_B598_41D5_61DEC434CEEF",
   "yaw": 120.39,
   "pitch": -4.39,
   "hfov": 4.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAD74454_AD83_9C88_41CA_5FDBED37CE9D"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 37.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.33,
   "hfov": 6.26
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C032C8_AD82_B598_41B3_4FA1214CE943",
   "yaw": 37.68,
   "pitch": -4.33,
   "hfov": 6.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB05E977_AD83_9777_41C3_80357D97DF91"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E, this.camera_E7CCF48C_AD82_BD99_41AE_3F91A4759A62); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B2A0AE5A_AC8E_ACB9_41CA_CA31941A9547"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B, this.camera_E73C7498_AD82_BDB9_41E4_6425127B148F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_1_1_6_map.gif",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 80.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.07,
   "hfov": 79.38
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B318E900_AC8F_7489_41CD_E356E9F03EEE"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_2_1_6_map.gif",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 16.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.43,
   "hfov": 52.16
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8D85354A_AC8E_9C99_41E2_B902B1B09AC0"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -80.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.69,
   "hfov": 4.32
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEDB46E_AD81_9C99_41D4_FDF8EBBEC60A",
   "yaw": -80.59,
   "pitch": -9.69,
   "hfov": 4.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E87F65BB_AD8F_7FF8_41E2_3E912C6BD8AA"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 17.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.76,
   "hfov": 3.78
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEDE46E_AD81_9C99_41E4_BD22A2F93A00",
   "yaw": 17.09,
   "pitch": -4.76,
   "hfov": 3.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9BC2E1B_AD8E_ACBF_41C6_DBA16774A3DA"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 73.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.36,
   "hfov": 4.76
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDED346E_AD81_9C96_41E2_C30F9B93D0FD",
   "yaw": 73.98,
   "pitch": -10.36,
   "hfov": 4.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9E865C8_AD8E_9F99_41D2_486624340430"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8474D_AB83_E747_41A3_59C2784BF937, this.camera_E26E5779_AD82_BB78_41DD_FF905F04D73F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0_HS_0_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 2.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.39,
   "hfov": 72.28
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_80F88276_AC82_B489_41CC_7CEB61FF80B7"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": 6.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.21,
   "hfov": 8.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_0_HS_1_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": 1.21,
   "yaw": 6.76,
   "hfov": 8.25
  }
 ],
 "id": "overlay_E961DCFB_AD81_AD78_41E2_894016BA170F"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1ED9D5D_AB83_EB47_41CE_14882A411842_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94, this.camera_E0A53512_AD82_BC88_41E0_AAD6BA92BA28); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BDBE1163_AB82_948F_41E2_3B872575B4B3"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 4.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.29,
   "hfov": 6.08
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52552DB_AD82_B5B8_41E2_33A82D4732B7",
   "yaw": 4.45,
   "pitch": -8.29,
   "hfov": 6.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAEE3DE6_AD83_6F89_41BF_DC93DA4267D0"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EFA152_AB83_9B5D_41E5_060025188045, this.camera_FCBC78F3_AD82_B58F_41E3_A49BA8C68E85); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_0_1_0_map.gif",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -16.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.86,
   "hfov": 41.09
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_98FB33EF_AC83_BB97_41E2_63325ADA7F4E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B, this.camera_E34DE8DE_AD82_B5B9_41CE_A5BC4FBA04B7); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_1_1_0_map.gif",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 27.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.9,
   "hfov": 47.1
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_98A49279_AC83_7578_41D9_127BBB360C9C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1, this.camera_E35C18C9_AD82_B59B_41C6_7B5280415A08); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_2_1_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "yaw": 129.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.63,
   "hfov": 25.81
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9B8759D5_AC81_B78B_41E0_10FACEC80A16"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D, this.camera_E36B98AC_AD82_B599_41B1_1C2123437BAB); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_3_1_0_map.gif",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -71.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.13,
   "hfov": 67.8
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_EDEFFC68_AC8E_AC99_41D1_018B094532CC"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -75.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.4,
   "hfov": 5.11
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53FB2C9_AD82_B598_41B7_7EE8B17E8C08",
   "yaw": -75.43,
   "pitch": -6.4,
   "hfov": 5.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA88878A_AD82_FB99_41E0_CCED2C073E9B"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -16.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.19,
   "hfov": 6.27
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53FF2C9_AD82_B598_41C1_0342E8528AC6",
   "yaw": -16.33,
   "pitch": -2.19,
   "hfov": 6.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBE00636_AD81_7C89_41B2_8822670C9D77"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 131.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.19,
   "hfov": 6.27
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53E32CA_AD82_B598_41B1_5B1B13F01219",
   "yaw": 131.39,
   "pitch": -2.19,
   "hfov": 6.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E96CA439_AD81_FCFB_41D5_B80FA078574E"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 27.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.69,
   "hfov": 6.27
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53E72CA_AD82_B598_41E1_E3C480AA8999",
   "yaw": 27.88,
   "pitch": -0.69,
   "hfov": 6.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE629F1_AD81_F78B_41AE_FEB5E0A20D63"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E, this.camera_E3370810_AD82_B489_41DE_380E332F48B8); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0_HS_0_1_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -1.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8,
   "hfov": 25.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_97D76E14_AC86_AC89_41C0_276C3B71D7DD"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8, this.camera_E329481B_AD82_B4BF_41B3_400226728EEE); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0_HS_1_1_0_map.gif",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 83.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.56,
   "hfov": 100.82
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_91EF943A_AC83_BCF8_41A6_7FCD53C94D5D"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.71,
   "hfov": 5.5
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53722CF_AD82_B598_41E3_759A0C95A20B",
   "yaw": -0.38,
   "pitch": -4.71,
   "hfov": 5.5,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA85E763_AD82_9C8F_41C5_C7E77E262B56"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 84.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.01,
   "hfov": 4.89
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53772CF_AD82_B598_41DF_DAD52056F116",
   "yaw": 84.72,
   "pitch": -2.01,
   "hfov": 4.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB9836C6_AD81_9D88_41E1_16BDA0B3572C"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724, this.camera_E6434423_AD82_BC8F_41E1_D11EB468E6E1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8A545D78_AC81_EF78_41C0_DEE12A66C752"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 88.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.16,
   "hfov": 4.6
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5CFA2BF_AD82_B5F8_41B7_6A37EE200B71",
   "yaw": 88.36,
   "pitch": -7.16,
   "hfov": 4.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA814D57_AD82_ACB7_41B0_57747EF8DE27"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1ED841E_AB83_98C4_41CD_649249221D46_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774, this.camera_E0B52504_AD82_BC88_41D2_6AE85D76FD0B); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0_HS_0_1_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -130.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.23,
   "hfov": 32.73
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B97E4516_AB9E_FC89_41C9_DC920E187B81"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -128.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.44,
   "hfov": 6.52
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52B92D7_AD82_B588_41E0_398A070E073E",
   "yaw": -128.75,
   "pitch": -1.44,
   "hfov": 6.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA24B964_AD81_9489_41DE_826B33D9E576"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B, this.camera_E62CB3BC_AD82_BBF8_416B_71E3DF3CB1FD); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0_HS_0_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 105.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.95,
   "hfov": 64.65
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_963DE33A_AC81_F4F8_41DC_EAB8C701F528"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 100.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.14,
   "hfov": 4.13
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53982CD_AD82_B598_41E5_617C1788ED28",
   "yaw": 100.67,
   "pitch": -3.14,
   "hfov": 4.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA9A29A1_AD82_F78B_41CA_6C5FE32A409C"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3, this.camera_E0F9753B_AD82_BCFF_41CF_2D713506830D); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B88D43F1_AB81_9B8A_41DD_C033DA525B2D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B, this.camera_E097651E_AD82_BCB8_4179_2F9E51510535); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_1_1_6_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 11.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.89,
   "hfov": 32.97
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B879DACB_AB81_959F_41E2_048F1A3A3223"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94, this.camera_E087352C_AD82_BC99_41DC_F2F6345C58A8); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_2_1_6_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -33.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.01,
   "hfov": 31.68
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BFF46CCA_AB82_AD99_41DA_F9D722007150"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -32.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.07,
   "hfov": 5.77
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E529B2D8_AD82_B5B8_41BC_ADFDADAC343F",
   "yaw": -32.41,
   "pitch": -2.07,
   "hfov": 5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAED9673_AD9E_FC8F_41E5_7BDE412DA5F3"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 12.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.57,
   "hfov": 5.77
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E529F2D8_AD82_B5B8_41D2_979045340E21",
   "yaw": 12.31,
   "pitch": -1.57,
   "hfov": 5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA2E9545_AD9E_9C88_41E3_A92D4A8F61B3"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 140.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97,
   "hfov": 3.03
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52802D8_AD82_B5B8_41E2_B63B4A8017FC",
   "yaw": 140.57,
   "pitch": -6.97,
   "hfov": 3.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB6C89BF_AD9F_77F7_41D2_3E990295F40A"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29, this.camera_E197C60D_AD82_BC9B_41E3_A9BF78B2FCDD); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_0_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 28.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.79,
   "hfov": 48.78
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9431A992_ACBE_B789_41E0_B7E932836722"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8FE73_AB83_6943_41A1_A1FFFBE09CC0, this.camera_E1A605FC_AD82_BF79_41C9_7AC8D7BA80A0); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_1_1_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -17.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.13,
   "hfov": 30.25
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_95ED9184_ACBF_9789_41D5_F47DADDD0668"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81, this.camera_E1B5A5EE_AD82_BF99_41DC_7F3C97DBCA8B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_2_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_97CEBCFF_ACBE_AD77_41D2_860CE61DA5B2"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -145.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.51,
   "hfov": 5.14
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53A62CD_AD82_B598_41AE_D48C3ED77D2D",
   "yaw": -145.27,
   "pitch": -2.51,
   "hfov": 5.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EABBC2D5_AD86_F58B_41A3_D58CBE3FDE67"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -16.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.3,
   "hfov": 6.99
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_4_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": -1.3,
   "yaw": -16.73,
   "hfov": 6.99
  }
 ],
 "id": "overlay_EBF4BCFD_AD81_6D7B_41D7_68C025A33E3E"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_5_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 29.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.63,
   "hfov": 6.14
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53AC2CD_AD82_B598_41E3_439BE61DBECB",
   "yaw": 29.07,
   "pitch": -1.63,
   "hfov": 6.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EB0F0BBB_AD81_6BFF_41B3_E579AAC170E1"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D, this.camera_E07215B3_AD82_BF8F_41A4_C2DE57FBC4C3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_0_1_0_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -13.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.84,
   "hfov": 56.43
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8FAD848E_AC81_9D99_41DE_5B0A8BEDAE44"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B, this.camera_E001F5A6_AD82_BF89_41C5_C0D7F67578EC); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_1_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 74.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.84,
   "hfov": 50.19
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8F88D61E_AC9E_9CB9_41DD_C6CBB202407E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_2_1_0_map.gif",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 32.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.85,
   "hfov": 28.52
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_897AAEC0_AC81_6D89_41D3_FCE945374966"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -21.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.03,
   "hfov": 4.84
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D392BD_AD82_B5F8_41D1_A76E1F90EF29",
   "yaw": -21.8,
   "pitch": -8.03,
   "hfov": 4.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E966B88D_AD8F_F59B_41D4_4CB96ABE290F"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 83.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.41,
   "hfov": 4.35
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D3C2BD_AD82_B5F8_41C7_BF0C39C13ED8",
   "yaw": 83.71,
   "pitch": -7.41,
   "hfov": 4.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAD0E02F_AD8F_9498_41DB_3575DB1A86F2"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 26.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.46,
   "hfov": 4.75
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D202BD_AD82_B5F8_41D4_342B51E75262",
   "yaw": 26.63,
   "pitch": -4.46,
   "hfov": 4.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4928836_AD8E_9489_41C8_D8590E953F32"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9, this.camera_E7A6F43F_AD82_BCF7_41C2_8486C5055AD5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_86EC4E34_AC81_6C89_41D7_37EA9C2A97F0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EFF13D_AB83_98C7_41DB_844589577050, this.camera_E7B54430_AD82_BC89_4199_3DDD9D80D4A6); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_1_1_6_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -153.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.88,
   "hfov": 63.11
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_804D2803_ACFE_F48F_41DF_EDE46BF6D972"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_2_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 86.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.4,
   "hfov": 6.61
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5C842C3_AD82_B588_41D6_59B6CCF0790D",
   "yaw": 86.35,
   "pitch": -6.4,
   "hfov": 6.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EABAE6A0_AD82_9D88_41D8_E09ACE94EF49"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_3_0_6_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -150.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.33,
   "hfov": 9.26
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_3_0.png",
      "width": 105,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": -4.33,
   "yaw": -150.99,
   "hfov": 9.26
  }
 ],
 "id": "overlay_EB30C33C_AD82_F4F9_41E2_02A663ED09D7"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318, this.camera_E6810370_AD82_B489_41E3_968AA0C8483B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90,
   "hfov": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90,
   "hfov": 90
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8C073C6D_AC81_AC9A_41CC_DFC0C69A1FA4"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B, this.camera_E6E92387_AD82_BB97_41C7_B4D23FD6E4BD); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_1_1_6_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 85.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.07,
   "hfov": 47.51
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8C63CC90_AC81_ED89_41E4_91C9C61C20CC"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E, this.camera_E6F5137B_AD82_BB7F_41E2_D766D9573009); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_2_1_6_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 144.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.07,
   "hfov": 66.95
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_8CB03A66_AC81_B489_41E1_BFFA780F7045"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 70.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.77,
   "hfov": 5.07
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEC246F_AD81_9C97_41DE_4A134F43DC28",
   "yaw": 70.53,
   "pitch": -12.77,
   "hfov": 5.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9BD6347_AD83_7497_41E3_10FA7B33ED4F"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 133.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.18,
   "hfov": 4.14
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FDEC646F_AD81_9C97_41E5_5BA2F8A87A89",
   "yaw": 133.98,
   "pitch": -5.18,
   "hfov": 4.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E91917BF_AD83_BBF7_41E1_21E47C4E47D4"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.39,
   "hfov": 6.53
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E5D632BB_AD82_B5F8_41B3_EF36F68E11B1",
   "yaw": -5.34,
   "pitch": -11.39,
   "hfov": 6.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E8F5F510_AD81_7C89_41DC_071EAA59EF22"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29, this.camera_E143B6CF_AD82_BD97_41D8_5BC3326D259C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0_HS_0_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -10.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.19,
   "hfov": 35.53
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_9BBC76DF_AC83_9DB8_41CA_B0602AF2D874"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -8.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.56,
   "hfov": 5.77
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E53B22CC_AD82_B598_41E4_A257CBE4EC94",
   "yaw": -8.04,
   "pitch": -0.56,
   "hfov": 5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA8AABA8_AD87_6B99_41D3_ED849A79F497"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1EFA152_AB83_9B5D_41E5_060025188045_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117, this.camera_E29436F0_AD82_BD89_41C5_48E7C1E24DAE); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0_HS_0_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 84.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.09,
   "hfov": 66.26
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BADE13D2_AB81_9B89_41E0_0151F6868BE6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1E89E4D_AB82_E947_41E2_150915ABE774, this.camera_E2A5C6E5_AD82_BD8B_41D8_A58A6019ECFB); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0_HS_1_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 35.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.58,
   "hfov": 28.38
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BAB425E3_AB81_9F8F_41E0_F0884C3CA496"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 36.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.15,
   "hfov": 4.36
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52E32D4_AD82_B589_41A9_44956FC7D08B",
   "yaw": 36.99,
   "pitch": -6.15,
   "hfov": 4.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE4AEF3_AD81_AD88_41E2_6CFC2039C964"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.03,
   "hfov": 4.34
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52E42D4_AD82_B589_41CB_AA8D82126C05",
   "yaw": 92.26,
   "pitch": -8.03,
   "hfov": 4.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA057C3F_AD81_ECF7_41D5_A6EB00F55EB2"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF, this.camera_E7EAD472_AD82_BC89_41DD_52E488955860); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_0_1_0_map.gif",
      "width": 173,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -146.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.82,
   "hfov": 65.56
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_BA70E554_AB82_9C89_41E3_FEFEDC8EDC50"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EA5A92_AB82_A9DC_41CF_77E963E0C25D, this.camera_E788D458_AD82_BCB9_41E0_E7088E2D2C53); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_1_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 41.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.75,
   "hfov": 48.62
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B9FE044E_AB81_BC99_41E3_FBC03C1D5C67"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0, this.camera_E7F93465_AD82_BC8B_41D0_B32B43D4D2E0); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_2_1_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -41.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.37,
   "hfov": 54.29
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B9421224_AB81_F488_41CD_0C03212FB08D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117, this.camera_E7DA647E_AD82_BD79_41AC_6491626782B8); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_3_1_0_map.gif",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 153.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.18,
   "hfov": 56.17
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_B93365B1_AB81_BF88_41D6_89C4DE3A18D2"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "yaw": 38.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.17,
   "hfov": 8.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_4_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ]
   },
   "pitch": -1.17,
   "yaw": 38.42,
   "hfov": 8.25
  }
 ],
 "id": "overlay_EA1EEB3B_AD83_94FF_41B6_39D10680153B"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -37.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.58,
   "hfov": 7.25
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52C32D6_AD82_B588_41D2_410DF6686FC6",
   "yaw": -37.44,
   "pitch": -4.58,
   "hfov": 7.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA3A2121_AD83_B48B_41D6_9A070D4D458F"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 151.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.06,
   "hfov": 5.47
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52C72D6_AD82_B588_41D2_C877E0449E0F",
   "yaw": 151.67,
   "pitch": -14.06,
   "hfov": 5.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E4B94F1E_AD82_ACB9_41D8_53B13BEC4420"
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -153.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.63,
   "hfov": 5.14
  }
 ],
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E52CD2D6_AD82_B588_41C6_E5F640AC770F",
   "yaw": -153.56,
   "pitch": -2.63,
   "hfov": 5.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E52CA2B8_AD82_B5F9_41CA_36FAA0F6D42B"
},
{
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 30,
 "rotate": false,
 "id": "panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "inertia": false
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C602C5_AD82_B588_41A2_A268967F5E18",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E9F388_AB83_FFCD_41A7_2C1D6709E51E_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C652C5_AD82_B588_41CA_4B655A8CB0E7",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C5D2C6_AD82_B588_41E5_2E531FA57C12",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C5E2C6_AD82_B588_41E0_36B08A5ADC63",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC9930_AB83_E8DD_41AD_87B498AEA610_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C432C6_AD82_B588_41D8_011F55E829DD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EB7A62_AB82_A97C_4169_9CD7B879B59F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E537D2CE_AD82_B598_41E0_E2E8F714285E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E8A768_AB83_674D_41C5_CC2E4F20E318_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_FDEB3470_AD81_9C89_41DF_69FB4AB0C9D0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEA5470_AD81_9C89_41BB_02E41A198330",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDE98471_AD81_9C8B_41DC_CCE31F0B4DDA",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDE9C471_AD81_9C8B_41D3_11FD57C399AE",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDE91471_AD81_9C8B_41C0_9DED2DAB4A64",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED9CF8_AB83_694D_41D9_651A4423C80B_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDE8A471_AD81_9C8B_41D5_BA915E42FF5B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E834B0_AB82_99DC_41C8_B47DD01F69B1_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53712CE_AD82_B598_41CD_0CAF2EB0CE2C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5CC82C1_AD82_B588_41DE_C671AB8D661B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5CCC2C1_AD82_B588_4193_96B5EC9E00E8",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5CB02C1_AD82_B588_418A_8F3AF0EA0D83",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC8F85_AB83_A7C7_41C4_0059257D209D_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5CB42C1_AD82_B588_41E5_1A638E726A00",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E53352D2_AD82_B588_418F_1446E711041A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53382D2_AD82_B588_41E2_949E3996298F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EB47BA_AB82_E7CC_41E1_EEDA50A94BB3_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E533A2D2_AD82_B588_41E5_9797414C6BBD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C912C2_AD82_B588_41E0_B5D057114AED",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C922C2_AD82_B588_41DF_9D2D17B4B3D9",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EE25CF_AB83_BB43_41E1_BE37F04948E9_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C992C3_AD82_B588_41E1_EBD7C82A53F3",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1F2757A_AB81_7B4C_41E5_2EA0512F6F4B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5CBC2C2_AD82_B588_41DE_CB46902EB01A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_E53502D0_AD82_B588_41E2_ECD52AD36519",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EA5BAE_AB82_AFC5_41E0_82D5D878EFB1_0_HS_3_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E53542D0_AD82_B588_41CF_ACF2952C3C69",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E527F2DA_AD82_B5B8_41DD_DB329B8F162D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52632DA_AD82_B5B8_41D4_450B9812524F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1F7E31D_AB82_98C7_41DF_ECB2A60D9F94_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E52662DA_AD82_B5B8_419C_78EB49DFC744",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5CEC2C0_AD82_B588_41E4_7A15E25B4ED1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5CD02C0_AD82_B588_41DC_9DD3F23108E6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EDE9FC_AB83_AB45_41B8_957F6501E5F0_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5CD42C0_AD82_B588_41D3_5DDD1319DE1C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E8474D_AB83_E747_41A3_59C2784BF937_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5C852C4_AD82_B588_41A1_94EB3431948E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EA76F9_AB82_B94C_41C5_D1F46098BF3B_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E52742D9_AD82_B5B8_41DD_2A2236EDE31D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C3A2C7_AD82_B588_41D1_9DC0369FB53F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C3E2C7_AD82_B588_41C6_94347E3D943E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5C222C7_AD82_B588_41E4_C767223D4D2C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EF3EB1_AB83_E9DF_41CC_E970EF703C5E_0_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_E5C262C7_AD82_B588_41C9_20F31C19ADAD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDD2D46C_AD81_9C99_41E2_CC74574318F1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDD2746C_AD81_9C99_41E2_6802E6E84A30",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDD1846C_AD81_9C99_41D0_30D765A4EC19",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDD1D46D_AD81_9C9B_418F_A63E8DD024FF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A02A2B53_AB82_EF43_41DF_6D65D4A2E60E_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5DB72B8_AD82_B5F8_41E3_964BBB274965",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EFDB5D_AB83_AF44_41D0_A57B6167CD2C_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53C82CB_AD82_B598_41B1_963B8D879C81",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E88334_AB82_F8C5_41B7_1B9985DD5BDE_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52F02D4_AD82_B588_41B4_1AA047799DB4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEF746E_AD81_9C99_41DB_0EAE3259A55E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1F6E5CA_AB82_BB4D_41B6_130CFFDADDEC_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEEA46E_AD81_9C99_41DD_7AFD05B148C4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC819E_AB82_9BC4_41D7_EDA24B0BFD49_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E535E2D1_AD82_B588_41CF_CA8853BE4DCD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5D132BE_AD82_B5F8_41E4_69C3C1BF4C2B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5D152BE_AD82_B5F8_41E5_52903D893FE9",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EEC840_AB83_68BD_41E3_348E9DF6511D_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5D192BE_AD82_B5F8_41B1_7A8BA8932110",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53DD2CB_AD82_B598_41CE_5E87E03688CF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EDD5D8_AB83_BB4D_41E2_B5A8A2D2E427_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53DF2CB_AD82_B598_41C3_352934CEA3BB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5DA82B9_AD82_B5F8_41B1_3A638605A200",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDD0646D_AD81_9C9B_41C1_9C751469A16A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E3AF05_AB82_A8C7_41C6_2635353F9980_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEF846D_AD81_9C9B_4195_65807E7422EB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53192D3_AD82_B588_41CE_ACEE4C44FA1E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E531A2D4_AD82_B588_41D6_064CB7D9BD18",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E531E2D4_AD82_B588_41AB_04075D58293C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EDED21_AB82_E8FF_41C7_2CDECE977117_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53042D4_AD82_B588_41D0_3ECAD7D9E827",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5D082BE_AD82_B5F8_41DC_388BD20CF876",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5D0F2BE_AD82_B5F9_41CB_05655EAA64AA",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC9E7A_AB83_694C_41CB_A2AA4D114724_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5CF02BF_AD82_B5F8_417C_3879975CD460",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EA1F61_AB81_677C_41E4_B3615600FB31_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E525E2DB_AD82_B5B8_41E0_24873017D99D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EAC621_AB82_B8FF_41D2_D43121E531B8_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53632D0_AD82_B588_41E1_4E596AE35667",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C1B2C8_AD82_B598_41C9_BB7E1F5234CA",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C1C2C8_AD82_B598_41D5_61DEC434CEEF",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EF0455_AB83_9946_41E1_D5DC2B3EDA1D_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5C032C8_AD82_B598_41B3_4FA1214CE943",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEDB46E_AD81_9C99_41D4_FDF8EBBEC60A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEDE46E_AD81_9C99_41E4_BD22A2F93A00",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EB2B88_AB82_AFCD_41D3_A1F777C4BA9E_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDED346E_AD81_9C96_41E2_C30F9B93D0FD",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E8A984_AB81_6BC4_41D6_9CE51A89D030_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52552DB_AD82_B5B8_41E2_33A82D4732B7",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53FB2C9_AD82_B598_41B7_7EE8B17E8C08",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53FF2C9_AD82_B598_41C1_0342E8528AC6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53E32CA_AD82_B598_41B1_5B1B13F01219",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EC1A57_AB83_A943_41CA_8CDF813DDD29_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53E72CA_AD82_B598_41E1_E3C480AA8999",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53722CF_AD82_B598_41E3_759A0C95A20B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E86088_AB82_B9CD_41D0_483D71EE14FB_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53772CF_AD82_B598_41DF_DAD52056F116",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED841E_AB83_98C4_41CD_649249221D46_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5CFA2BF_AD82_B5F8_41B7_6A37EE200B71",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EB943B_AB82_98C3_41D8_00B5FC1F4BF0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E52B92D7_AD82_B588_41E0_398A070E073E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EAF8BC_AB83_69C5_41D5_40C139184A81_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53982CD_AD82_B598_41E5_617C1788ED28",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E529B2D8_AD82_B5B8_41BC_ADFDADAC343F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E529F2D8_AD82_B5B8_41D2_979045340E21",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E8C0D4_AB82_B945_41E0_0270C4276D32_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52802D8_AD82_B5B8_41E2_B63B4A8017FC",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E53A62CD_AD82_B598_41AE_D48C3ED77D2D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EBC06C_AB83_7945_41D8_80917A2A0F7B_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53AC2CD_AD82_B598_41E3_439BE61DBECB",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5D392BD_AD82_B5F8_41D1_A76E1F90EF29",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5D3C2BD_AD82_B5F8_41C7_BF0C39C13ED8",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EA72AE_AB83_79C5_41E1_291AE864DD21_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5D202BD_AD82_B5F8_41D4_342B51E75262",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E17B3D_AB83_A8C7_41E2_7040F6DCEAE3_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E5C842C3_AD82_B588_41D6_59B6CCF0790D",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEC246F_AD81_9C97_41DE_4A134F43DC28",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_FDEC646F_AD81_9C97_41E5_5BA2F8A87A89",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1ED7134_AB82_98C5_41E5_417FBF89747D_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E5D632BB_AD82_B5F8_41B3_EF36F68E11B1",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1EFA152_AB83_9B5D_41E5_060025188045_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E53B22CC_AD82_B598_41E4_A257CBE4EC94",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52E32D4_AD82_B589_41A9_44956FC7D08B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1ECC8A0_AB82_E9FD_41D2_6EC7C871F3CF_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52E42D4_AD82_B589_41CB_AA8D82126C05",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E52C32D6_AD82_B588_41D2_410DF6686FC6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52C72D6_AD82_B588_41D2_C877E0449E0F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_A1E89E4D_AB82_E947_41E2_150915ABE774_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "id": "AnimatedImageResource_E52CD2D6_AD82_B588_41C6_E5F640AC770F",
 "colCount": 4
}],
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "minWidth": 20,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.6,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "paddingBottom": 0,
 "defaultVRPointer": "laser",
 "class": "Player",
 "scripts": {
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "verticalAlign": "top",
 "downloadEnabled": false,
 "data": {
  "name": "Player485"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
