
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(
      { brash_colours: true, compressed_grid: true, accessible: false },
      (items) => {
        document.getElementById('brash').checked = items.brash_colours;
        document.getElementById('grid').checked = items.compressed_grid;
        document.getElementById('access').checked = items.accessible;
      }
    );
});

document.getElementById('save').addEventListener('click', () => {
    const brashColors = document.getElementById('brash').checked;
    const compressedGrid = document.getElementById('grid').checked;
    const accessible = document.getElementById('access').checked;
  
    chrome.storage.sync.set(
      { brash_colours: brashColors, compressed_grid: compressedGrid, accessible: accessible },
      () => {
        const status = document.getElementById('status');
        status.textContent = 'Options saved. Refresh to see changes.';
        setTimeout(() => {
          status.textContent = '';
        }, 1500);
      }
    );
});
