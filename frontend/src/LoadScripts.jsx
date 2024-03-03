import React, { useEffect } from 'react';

function LoadScripts() {
  useEffect(() => {
    const loadScript = (src, type) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = type;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    async function loadAllScripts() {
      try {
        await loadScript('~/Scripts/jquery-1.9.1.min.js', 'text/javascript');
        await loadScript('~/Scripts/jquery-ui-1.10.1.custom.min.js', 'text/javascript');
        await loadScript('~/bootstrap/js/bootstrap.min.js', 'text/javascript');
        await loadScript('~/Scripts/flot/jquery.flot.js', 'text/javascript');
        await loadScript('~/Scripts/flot/jquery.flot.resize.js', 'text/javascript');
        await loadScript('~/Scripts/datatables/jquery.dataTables.js', 'text/javascript');
        await loadScript('~/Scripts/common.js', 'text/javascript');
        console.log('All scripts loaded successfully');
      } catch (error) {
        console.error('Failed to load scripts:', error);
      }
    }

    loadAllScripts();

    // Cleanup function
    return () => {
      // Remove the loaded scripts if needed
    };
  }, []);

  return <></>;
}

export default LoadScripts;
