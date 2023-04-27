import Layout from "@/components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: 'm1',
    title: 'React Meetup',
    address: '123 Main Street, Anytown USA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
  },
  {
    id: 'm2',
    title: 'Angular Meetup',
    address: '456 Oak Avenue, Anycity USA',
    image: 'https://angular.io/assets/images/logos/angular/angular.png',
  },
  {
    id: 'm3',
    title: 'Vue Meetup',
    address: '789 Elm Street, Anyvillage USA',
    image: 'https://vuejs.org/images/logo.png',
  },
  {
    id: 'm4',
    title: 'Node.js Meetup',
    address: '1010 Pine Road, Anyhamlet USA',
    image: 'https://nodejs.org/static/images/logo-hexagon-card.png',
  },
  {
    id: 'm5',
    title: 'GraphQL Meetup',
    address: '1212 Maple Street, Anyburg USA',
    image: 'https://graphql.org/img/logo.svg',
  },
  {
    id: 'm6',
    title: 'TypeScript Meetup',
    address: '1414 Cedar Lane, Anycounty USA',
    image: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    id: 'm7',
    title: 'React Native Meetup',
    address: '1616 Oakwood Drive, Anyprovince USA',
    image: 'https://reactnative.dev/img/header_logo.svg',
  },
  {
    id: 'm10',
    title: 'GraphQL Meetup',
    address: '2222 Pine Street, Anytown USA',
    image: 'https://graphql.org/img/logo.svg',
  },
];


const HomePage = () =>{
  return <>
    <MeetupList meetups={meetups}/>
  </>
}

export default HomePage;