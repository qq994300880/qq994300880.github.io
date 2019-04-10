const gitalk = new Gitalk({
  clientID: '79365aa30e12daa029aa',
  clientSecret: 'd1c8ec5600c61118a2048f5af562e6e7d32e0c9c',
  repo: 'qq994300880.github.io',
  owner: 'qq994300880',
  admin: ['qq994300880'],
  //id: location.pathname,     // Ensure uniqueness and length less than 50
  distractionFreeMode: true  // Facebook-like distraction free mode
});

gitalk.render('gitalk-container');