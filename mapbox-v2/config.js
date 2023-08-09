var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZGluYXJzdXJ5YW4iLCJhIjoiY2xobjBmOTVoMWhrZTNucXBkdTl2OXkxdyJ9.mplYYy_H8T0wmjlcJOGK7Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'item-main',
            alignment: 'main-list',
            hidden: false,
            title: 'Latar Belakang',
            image: 'https://asset.kompas.com/crops/zmZM8alsgkaCHDZyd3kOtJtlFgU=/0x0:1500x1000/750x500/data/photo/2022/10/04/633c1abb9449e.jpg',
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat leo, non tincidunt nunc. Proin ullamcorper ligula dapibus vestibulum dapibus. Morbi blandit at nisi vel convallis. Cras iaculis ipsum ut mauris tempor facilisis. Aliquam erat volutpat. Cras molestie vehicula nisl, in gravida lorem accumsan et. Curabitur in lacinia risus. Quisque eleifend blandit turpis non dapibus. Nulla quis egestas tellus. Nam aliquam molestie quam, at scelerisque sem tempus vel. Suspendisse vel nisl id sapien maximus tempus sed in dolor. Donec semper venenatis augue eget ultricies. Vestibulum lacinia, dui id consequat ornare, diam metus imperdiet tortor, non congue risus nulla vitae nibh. Cras tristique condimentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum lacinia lacus id efficitur.
                </p>

                <p>
                    Etiam blandit ullamcorper mauris vitae venenatis. Morbi ac nunc in felis fringilla dictum. Duis et dignissim arcu. Proin vel auctor ante, dapibus scelerisque nisl. Nulla fermentum orci id arcu pulvinar, sit amet vehicula leo blandit. Fusce porta leo felis, id mattis diam rhoncus ac. Suspendisse potenti. Suspendisse congue nec purus at condimentum. Vivamus a felis id ante sagittis condimentum ut et lectus. Donec pretium placerat nisi, vitae fringilla ipsum elementum nec. Sed dolor odio, varius a tellus at, sodales molestie ligula. Proin tincidunt faucibus tellus sed eleifend. Donec mattis non diam sit amet molestie.
                </p>
            `,
            model: null,
            scale: null,
            location: {
                center: [110.469498, -7.757892],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'item-1',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 1 - Candi Sari',
            image: 'https://asset.kompas.com/crops/zmZM8alsgkaCHDZyd3kOtJtlFgU=/0x0:1500x1000/750x500/data/photo/2022/10/04/633c1abb9449e.jpg',
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat velit a convallis cursus. Aliquam posuere magna augue, sit amet egestas turpis efficitur volutpat. Nullam id enim a magna semper tempus vitae non magna. Ut nec est sit amet massa facilisis malesuada eu eget turpis. Integer sodales, elit a sodales euismod, lectus sapien cursus elit, ac facilisis elit lectus vel justo. Donec eget egestas urna.
                </p>

                <p>
                    Etiam posuere aliquet sapien et venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a tellus lacus. Integer quis varius enim. Vestibulum ultrices mollis metus, sed lacinia nisl efficitur at. Vestibulum in eleifend dui. Aliquam nunc mi, tristique nec feugiat vitae, euismod nec sem. Aliquam mi ante, aliquet vel consequat et, pretium in arcu. Vestibulum vehicula lacus sit amet ipsum volutpat, vitae imperdiet ipsum varius. Curabitur a odio volutpat, facilisis nisi in, iaculis odio. Fusce lorem arcu, ullamcorper non maximus nec, suscipit at tellus. Curabitur rhoncus scelerisque leo non faucibus. Mauris ac lectus eget metus imperdiet aliquet ac non metus. Mauris ac sem sem.
                </p>
            `,
            model: 'https://satomo5.github.io/3d/prambanan/scene.gltf',
            scale: 3,
            locatioObj: [110.47407, -7.76115],
            location: {
                center: [110.47428103950577, -7.761219359027983],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'item-2',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 2 - Candi Kedulan',
            image: 'https://img.bandung.go.id/images/news/2022/09/06/header/166247054561-hjkb212-mengenal-gedung-sate-oh-ternyata-ini-asal-usul-namanya.jpeg',
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat leo, non tincidunt nunc. Proin ullamcorper ligula dapibus vestibulum dapibus. Morbi blandit at nisi vel convallis. Cras iaculis ipsum ut mauris tempor facilisis. Aliquam erat volutpat. Cras molestie vehicula nisl, in gravida lorem accumsan et. Curabitur in lacinia risus. Quisque eleifend blandit turpis non dapibus. Nulla quis egestas tellus. Nam aliquam molestie quam, at scelerisque sem tempus vel. Suspendisse vel nisl id sapien maximus tempus sed in dolor. Donec semper venenatis augue eget ultricies. Vestibulum lacinia, dui id consequat ornare, diam metus imperdiet tortor, non congue risus nulla vitae nibh. Cras tristique condimentum ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum lacinia lacus id efficitur.
                </p>

                <p>
                    Etiam blandit ullamcorper mauris vitae venenatis. Morbi ac nunc in felis fringilla dictum. Duis et dignissim arcu. Proin vel auctor ante, dapibus scelerisque nisl. Nulla fermentum orci id arcu pulvinar, sit amet vehicula leo blandit. Fusce porta leo felis, id mattis diam rhoncus ac. Suspendisse potenti. Suspendisse congue nec purus at condimentum. Vivamus a felis id ante sagittis condimentum ut et lectus. Donec pretium placerat nisi, vitae fringilla ipsum elementum nec. Sed dolor odio, varius a tellus at, sodales molestie ligula. Proin tincidunt faucibus tellus sed eleifend. Donec mattis non diam sit amet molestie.
                </p>
            `,
            model: 'https://satomo5.github.io/3d/kedulan/scene.gltf',
            scale: 500,
            locatioObj: [110.46933, -7.74247],
            location: {
                center: [110.46969789532558, -7.742360002737333],
                zoom: 18,
                pitch: 60,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            rotation: {
                x: 0,
                y: 0,
                z: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'item-3',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 3 - Candi Kalasan',
            image: 'https://kebudayaan.jogjakota.go.id/assets/instansi/kebudayaan/gallery/page_20210729_062059.jpg',
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat velit a convallis cursus. Aliquam posuere magna augue, sit amet egestas turpis efficitur volutpat. Nullam id enim a magna semper tempus vitae non magna. Ut nec est sit amet massa facilisis malesuada eu eget turpis. Integer sodales, elit a sodales euismod, lectus sapien cursus elit, ac facilisis elit lectus vel justo. Donec eget egestas urna.
                </p>

                <img src="https://asset.kompas.com/crops/zmZM8alsgkaCHDZyd3kOtJtlFgU=/0x0:1500x1000/750x500/data/photo/2022/10/04/633c1abb9449e.jpg">

                <p>
                    Etiam posuere aliquet sapien et venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a tellus lacus. Integer quis varius enim. Vestibulum ultrices mollis metus, sed lacinia nisl efficitur at. Vestibulum in eleifend dui. Aliquam nunc mi, tristique nec feugiat vitae, euismod nec sem. Aliquam mi ante, aliquet vel consequat et, pretium in arcu. Vestibulum vehicula lacus sit amet ipsum volutpat, vitae imperdiet ipsum varius. Curabitur a odio volutpat, facilisis nisi in, iaculis odio. Fusce lorem arcu, ullamcorper non maximus nec, suscipit at tellus. Curabitur rhoncus scelerisque leo non faucibus. Mauris ac lectus eget metus imperdiet aliquet ac non metus. Mauris ac sem sem.
                </p>
            `,
            model: 'https://satomo5.github.io/3d/kalasan/scene.gltf',
            scale: 1.5,
            locatioObj: [110.47202, -7.76753],
            location: {
                center: [110.47237195299788, -7.767060753769619],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'item-4',
            alignment: 'list-card',
            hidden: false,
            title: 'Bagian 4 - Candi Sambisari',
            image: 'https://media.istockphoto.com/id/1133179764/id/foto/losari-beach.jpg?s=170667a&w=0&k=20&c=HDtqv2iAKQcwTKWJnOVwDPhDYnLB8YOIdpcm3nFq-IA=',
            description: `
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat velit a convallis cursus. Aliquam posuere magna augue, sit amet egestas turpis efficitur volutpat. Nullam id enim a magna semper tempus vitae non magna. Ut nec est sit amet massa facilisis malesuada eu eget turpis. Integer sodales, elit a sodales euismod, lectus sapien cursus elit, ac facilisis elit lectus vel justo. Donec eget egestas urna.
                </p>

                <p>
                    Etiam posuere aliquet sapien et venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a tellus lacus. Integer quis varius enim. Vestibulum ultrices mollis metus, sed lacinia nisl efficitur at. Vestibulum in eleifend dui. Aliquam nunc mi, tristique nec feugiat vitae, euismod nec sem. Aliquam mi ante, aliquet vel consequat et, pretium in arcu. Vestibulum vehicula lacus sit amet ipsum volutpat, vitae imperdiet ipsum varius. Curabitur a odio volutpat, facilisis nisi in, iaculis odio. Fusce lorem arcu, ullamcorper non maximus nec, suscipit at tellus. Curabitur rhoncus scelerisque leo non faucibus. Mauris ac lectus eget metus imperdiet aliquet ac non metus. Mauris ac sem sem.
                </p>
            `,
            model: 'https://satomo5.github.io/3d/sambisari/scene.gltf',
            scale: 5,
            locatioObj: [110.44605, -7.76293],
            location: {
                center: [110.44699447998208, -7.7622571207001485],
                zoom: 18,
                pitch: 60,
                bearing: 0
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
