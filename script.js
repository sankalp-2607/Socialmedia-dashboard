// Utility: Create gradient for charts
function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

// Sidebar Navigation Active State
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Remove active class from all items
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
    });
  });

  // Sidebar toggle functionality
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
    });
  }
});

// Engagement Chart (Glowing Line)
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
const engagementGradient = createGradient(engagementCtx, 'rgba(96,165,250,0.5)', 'rgba(96,165,250,0.05)');
new Chart(engagementCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Engagement Rate',
      data: [5, 7, 6, 9, 8, 10, 12],
      borderColor: '#60a5fa',
      backgroundColor: engagementGradient,
      borderWidth: 3,
      tension: 0.45,
      pointBackgroundColor: '#60a5fa',
      pointBorderColor: '#fff',
      fill: true,
      shadowOffsetX: 3,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#94a3b8',
        borderColor: '#60a5fa',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }
});

// Sentiment Chart (Interactive Doughnut with hover effects)
const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
const sentimentChart = new Chart(sentimentCtx, {
  type: 'doughnut',
  data: {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: [
        'rgba(34,197,94,0.9)',
        'rgba(250,204,21,0.9)',
        'rgba(239,68,68,0.9)'
      ],
      borderWidth: 3,
      borderColor: '#0f172a',
      hoverOffset: 20,
      hoverBorderWidth: 4,
      hoverBorderColor: '#fff',
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#94a3b8',
        borderColor: '#60a5fa',
        borderWidth: 2,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    },
    cutout: '75%',
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: 'easeOutBounce'
    },
    onHover: (event, activeElements) => {
      event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
      
      if (activeElements.length > 0) {
        const index = activeElements[0].index;
        const values = ['65%', '25%', '10%'];
        document.getElementById('positiveVal').style.transform = index === 0 ? 'scale(1.2)' : 'scale(1)';
        document.getElementById('neutralVal').style.transform = index === 1 ? 'scale(1.2)' : 'scale(1)';
        document.getElementById('negativeVal').style.transform = index === 2 ? 'scale(1.2)' : 'scale(1)';
      }
    }
  }
});

// Bar Chart for Likes
const likesCtx = document.getElementById('likesChart').getContext('2d');
new Chart(likesCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Likes',
      data: [450, 520, 480, 650, 720, 890, 950],
      backgroundColor: 'rgba(239,68,68,0.8)',
      borderColor: 'rgba(239,68,68,1)',
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: 'rgba(239,68,68,1)',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#94a3b8',
        borderColor: '#ef4444',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { display: false }
      }
    }
  }
});

// Bar Chart for Followers
const followersCtx = document.getElementById('followersChart').getContext('2d');
new Chart(followersCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Followers',
      data: [120, 145, 168, 190, 215, 245, 280],
      backgroundColor: 'rgba(96,165,250,0.8)',
      borderColor: 'rgba(96,165,250,1)',
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: 'rgba(96,165,250,1)',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#94a3b8',
        borderColor: '#60a5fa',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { display: false }
      }
    }
  }
});

// Bar Chart for Shares
const sharesCtx = document.getElementById('sharesChart').getContext('2d');
new Chart(sharesCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Shares',
      data: [85, 92, 78, 110, 125, 148, 165],
      backgroundColor: 'rgba(34,197,94,0.8)',
      borderColor: 'rgba(34,197,94,1)',
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: 'rgba(34,197,94,1)',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#94a3b8',
        borderColor: '#22c55e',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { display: false }
      }
    }
  }
});

// Bar Chart for Reposts
const repostsCtx = document.getElementById('repostsChart').getContext('2d');
new Chart(repostsCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Reposts',
      data: [45, 58, 52, 72, 68, 85, 95],
      backgroundColor: 'rgba(250,204,21,0.8)',
      borderColor: 'rgba(250,204,21,1)',
      borderWidth: 2,
      borderRadius: 8,
      hoverBackgroundColor: 'rgba(250,204,21,1)',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#fff',
        bodyColor: '#94a3b8',
        borderColor: '#facc15',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      x: {
        ticks: { color: '#94a3b8' },
        grid: { display: false }
      }
    }
  }
});

// Theme toggle (optional)
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}