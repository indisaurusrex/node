// Learning callbacks, promises & async await with exercises

let routesInformation = [
    {
        id: 1,
        routeName: 'San Pedro Garza García',
        schedule: 10
    },
    {
        id: 2,
        routeName: 'Apodaca',
        schedule: 5
    },
    {
        id: 3,
        routeName: 'San Nicolás de los Garza',
        schedule: 15
    },
    {
        id: 4,
        routeName: 'Monterrey',
        schedule: 3
    },
    {
        id: 5,
        routeName: 'Guadalupe',
        schedule: 12
    },
    {
        id: 6,
        routeName: 'Santa Catarina',
        schedule: 8
    },
    {
        id: 7,
        routeName: 'General Escobedo',
        schedule: 10
    },
];
let trafficRoutes = [
    {
        id: 1,
        traffic: 1,
        greenTrafficLight: true
    },
    {
        id: 2,
        traffic: 3,
        greenTrafficLight: false
    },
    {
        id: 3,
        traffic: 5,
        greenTrafficLight: false
    },
    {
        id: 4,
        traffic: 8,
        greenTrafficLight: true
    },
    {
        id: 5,
        traffic: 5,
        greenTrafficLight: true
    },
    {
        id: 6,
        traffic: 2,
        greenTrafficLight: false
    },
    {
        id: 7,
        traffic: 6,
        greenTrafficLight: false
    }
];

Callbacks

const getRouteName = (id,callback) => {
    const routeId = routesInformation.find(route => route.id === id);
    if (!routeId) {
        return callback(`There's no route name by the ID: ${id}`);
    };
    return callback(null,routeId);
};
const getTraffic = (route,callback) => {
    const trafficTime = trafficRoutes.find(traffic => route.id === traffic.id);
    //console.log(trafficTime);
    if (!trafficTime) {
        callback(`There's no traffic time for the route name: ${route.routeName}`);
    } else {
        callback(null, {
            id: route.id,
            routeName: route.routeName,
            schedule: route.schedule,
            traffic: trafficTime.traffic,
            greenTrafficLight: trafficTime.greenTrafficLight
        });
    };
};
getRouteName(1,(error,route) => {
    if (error) {
        return console.log(error);
    };
    getTraffic(route,(error,response) => {
        if (error) {
            return console.log(error);
        };
        console.log(`The route name is ${response.routeName} and the cycle time for the route ${response.id} is ${response.schedule} minutes. The route bus has been ${response.traffic} minutes in the same location and the green traffic ligth is on: ${response.greenTrafficLight}`);
});
});

//Promises

// const getRouteName = (id) => {
//     return new Promise((resolve, reject) =>{
//       const routeId = routesInformation.find( route => route.id === id );
//        if (!routeId) {
//         reject(`There's no route name by the ID: ${id}`);
//        } else {
//         resolve(routeId);
//        };
//     });
//   };

// const getTraffic = (route) =>{
//     return new Promise((resolve, reject)=>{
//         const trafficTime = trafficRoutes.find( traffic => route.id === traffic.id);
//         if (!trafficTime) {
//         reject(`There's no traffic time for the route name: ${route.routeName}`);
//         } else {
//         resolve({
//             id: route.id,
//             routeName: route.routeName,
//             schedule: route.schedule,
//             traffic: trafficTime.traffic,
//             greenTrafficLight: trafficTime.greenTrafficLight
//         });
//         };
//     });
// };
// getRouteName(1).then((route) => getTraffic(route))
//                     .then((response) => console.log(response))
//                     .catch((error) => console.log(error));

//Async Await

// const getRouteName = async(id) => {
//     const routeId = routesInformation.find( route => route.id === id );
//     if (!routeId) {
//     throw new Error(`There's no route name by the ID: ${id}`);
//     };
//     return (routeId);
// };

// const getTraffic = async(route) => {
//     const trafficTime = trafficRoutes.find( traffic => route.id === traffic.id);
//     if (!trafficTime) {
//         throw new Error (`There's no traffic time for the route name: ${route.routeName}`);
//     };
//     return {
//         id: route.id,
//         routeName: route.routeName,
//         schedule: route.schedule,
//         traffic: trafficTime.traffic,
//         greenTrafficLight: trafficTime.greenTrafficLight
//     };
// };

// const routeInformation = async(id) => {
//     const routeName =  await getRouteName(id);
//     const traffic = await getTraffic(routeName);
//     return traffic;
// };

// routeInformation(1)
//                 .then( (response) => console.log(response))
//                 .catch( (error) => console.log(error)) 
