import { name, version } from '../package.json';

const label = document.createElement('code');
label.className = 'ds-package-label';
const release = document.createElement('span');
release.textContent = `v${version}`;
label.append(`${name} — `, release);

function mountPackageLabel() {
  if (label.isConnected) return;
  document.getElementById('storybook-sidebar-region')?.append(label);
}

// The manager remounts the sidebar when switching between mobile navigation and fullscreen.
const observer = new MutationObserver(mountPackageLabel);
observer.observe(document.getElementById('root') ?? document.body, { childList: true, subtree: true });
mountPackageLabel();
