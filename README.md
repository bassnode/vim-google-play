Google Play Vim
===============
Google Play Music + Vim!
Keep focus on your code and still control Google Play's Music interface.


Installation
------------
Make sure you're using the beta version of [Google Chrome](https://www.google.com/intl/en/chrome/browser/beta.html "Chrome Beta")

    # Install the Vim plugin via Pathogen
    git clone https://code.google.com/p/vim-google-play/ ~/.vim/bundle/vim-google-play

    # Install the Python script which communicates
    # between Chrome and Vim:
    sudo ~/.vim/bundle/vim-google-play/chrome/host/install_host.sh

Install the [Chrome extension](https://chrome.google.com/webstore/detail/vim-google-play/hlkahhljkhopbnhajdjmiicihofpnjla "Install extension")

Load or refresh [http://music.google.com](http://music.google.com "Google Play")


Controlling Google Play
-----------------------
By default, the key bindings are the following:

  * Play/Pause: <leader> + Spacebar
  * Next Song: <leader> + Right Arrow
  * Previous Song: <leader> + Left Arrow
  * Volume Up: <leader> + Up Arrow
  * Volume Down: <leader> + Down Arrow
  * Shuffle Everything: <leader> + 8

Configuration
-------------
The script uses netcat (`nc`) communicate.  If your OS doesn't have access to netcat,
you can override the binary to use by setting this in your ~/.vimrc:

```
  let g:google_play_net_exec = 'netcat.exe'
```

Note that it's highly preferrable to use netcat as there's no guarantee your replacement will work.
