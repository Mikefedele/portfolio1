const dashBtn = document.getElementById('dashBtn')
function goDash() {
  document.location.replace('/api/dashboard');
};

dashBtn.addEventListener('click', goDash);

document.getElementById('contactBtn').addEventListener('click', )