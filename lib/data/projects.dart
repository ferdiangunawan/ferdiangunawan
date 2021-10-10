class Project {
  final String name;
  final String description;
  final String image;
  final String url;
  final List<String> skills;

  Project({this.name, this.description, this.image, this.url, this.skills});
}

// ignore: non_constant_identifier_names
List<Project> PROJECTS = [
  Project(
    name: 'Ontix',
    description: 'Developing a Ticketing booking application with Flutter SDK and Firebase',
    image: 'images/projects/ontix.jpeg',
    url: 'https://play.google.com/store/apps/details?id=com.fgdev.ontix',
    skills: [
      'Dart',
      'Json',
      'Firebase',
      'Flutter',
      'NodeJs'
          'Git',
    ],
  ),
  Project(
    name: 'Food delivery app',
    description: 'Developing food delivery app with beautiful interface',
    image: 'images/projects/foodApp.png',
    url: 'https://drive.google.com/file/d/1jIq4THe3MykC3mP5_ju8ye_grWVXVLVx/view?usp=sharing',
    skills: [
      'Dart',
      'Flutter',
      'Json'
          'Git',
    ],
  ),
  Project(
    name: 'Service Guidance',
    description: 'Learning apps for mechanic student to do service on heavy equipment',
    image: 'images/projects/serviceguidance.jpeg',
    url: 'https://drive.google.com/file/d/1vSifFw948s9qiP2SMF9bLIJ_RvKkpOBA/view?usp=sharing',
    skills: [
      'Java',
      'Android Studio',
      'Firebase',
      'Git',
    ],
  ),
  Project(
    name: 'Machine Health and Condition Monitoring',
    description: 'Monitoring realtime data Komatsu PC3000-6E Electric by Android (IoT)',
    image: 'images/projects/mhcm.jpeg',
    url: 'https://drive.google.com/file/d/1DlSViRbXZk9YQW7g3xjBYBaLunTxLs4o/view?usp=sharing',
    skills: [
      'Java',
      'Android Studio',
      'Firebase',
      'Git',
    ],
  ),
  Project(
    name: 'Cozy Room',
    description: 'Find cozy house to stay and happy',
    image: 'images/projects/kos.png',
    url: 'https://drive.google.com/file/d/13K0vHobP-VmXmwDoMlT633GLul-wj94n/view?usp=sharing',
    skills: [
      'Dart',
      'Flutter',
      'Sql',
      'Git',
    ],
  ),
];
