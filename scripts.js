particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffffff"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 1
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
  
  // 标签页切换效果
  function showTab(tabId) {
    // 移除所有标签的active类
    const tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(tab => {
      tab.classList.remove('active');
    });
  
    // 显示被点击的标签
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }
  
  // 设置默认显示的标签页
  document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
  });
  
  // 视频控制
  function toggleVideo() {
    const video = document.getElementById('myVideo');
    const pauseButton = document.getElementById('pauseButton');
    
    if (video.paused) {
      video.play();
      pauseButton.textContent = 'Pause';
    } else {
      video.pause();
      pauseButton.textContent = 'Play';
    }
  }