class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    (function () {
      let globalWindow = window;

      if (globalWindow.ChannelIO) {
        return globalWindow.console.error('ChannelIO script included twice.');
      }

      let channel = function () {
        channel.context(arguments);
      };

      channel.queue = [];
      channel.context = function (args) {
        channel.queue.push(args);
      };

      globalWindow.ChannelIO = channel;

      function initChannelTalk() {
        if (globalWindow.ChannelIOInitialized) {
          return;
        }

        globalWindow.ChannelIOInitialized = true;

        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';

        let firstScript = document.getElementsByTagName('script')[0];

        if (firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        }
      }

      if (document.readyState === 'complete') {
        initChannelTalk();
      } else {
        globalWindow.addEventListener('DOMContentLoaded', initChannelTalk);
        globalWindow.addEventListener('load', initChannelTalk);
      }
    })();
  }

  boot(option, callback) {
    window.ChannelIO('boot', option, callback);
  }

  shutdown() {
    window.ChannelIO('shutdown');
  }

  showMessenger() {
    window.ChannelIO('showMessenger');
  }

  hideMessenger() {
    window.ChannelIO('hideMessenger');
  }

  openChat(chatId, message) {
    window.ChannelIO('openChat', chatId, message);
  }

  track(eventName, eventProperty) {
    window.ChannelIO('track', eventName, eventProperty);
  }

  onShowMessenger(callback) {
    window.ChannelIO('onShowMessenger', callback);
  }

  onHideMessenger(callback) {
    window.ChannelIO('onHideMessenger', callback);
  }

  onBadgeChanged(callback) {
    window.ChannelIO('onBadgeChanged', callback);
  }

  onChatCreated(callback) {
    window.ChannelIO('onChatCreated', callback);
  }

  onFollowUpChanged(callback) {
    window.ChannelIO('onFollowUpChanged', callback);
  }

  onUrlClicked(callback) {
    window.ChannelIO('onUrlClicked', callback);
  }

  clearCallbacks() {
    window.ChannelIO('clearCallbacks');
  }

  updateUser(userInfo, callback) {
    window.ChannelIO('updateUser', userInfo, callback);
  }

  addTags(tags, callback) {
    window.ChannelIO('addTags', tags, callback);
  }

  removeTags(tags, callback) {
    window.ChannelIO('removeTags', tags, callback);
  }

  setPage(page) {
    window.ChannelIO('setPage', page);
  }

  resetPage() {
    window.ChannelIO('resetPage');
  }

  showChannelButton() {
    window.ChannelIO('showChannelButton');
  }

  hideChannelButton() {
    window.ChannelIO('hideChannelButton');
  }

  setAppearance(appearance) {
    window.ChannelIO('setAppearance', appearance);
  }
}

export default new ChannelService();
