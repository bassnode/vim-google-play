Google Play Vim
===============
Google Play Music + Vim!
Keep focus on your code and still control Google Play's Music interface.


Installation
------------
Install the Vim plugin via Pathogen

    git clone https://github.com/bassnode/vim-google-play.git ~/.vim/bundle/vim-google-play

Install the Python script which communicates between Chrome and Vim:

    sudo ~/.vim/bundle/vim-google-play/chrome/host/install_host.sh

Install the [Chrome extension](https://chrome.google.com/webstore/detail/vim-google-play/hlkahhljkhopbnhajdjmiicihofpnjla "Install extension")

Load or refresh [http://music.google.com](http://music.google.com "Google Play")


Controlling Google Play
-----------------------
By default, the key bindings are the following:

  * Play/Pause: `<leader>` + Spacebar
  * Next Song: `<leader>` + Right Arrow
  * Previous Song: `<leader>` + Left Arrow
  * Volume Up: `<leader>` + Up Arrow
  * Volume Down: `<leader>` + Down Arrow
  * Shuffle Everything: `<leader>` + 8

Volume control only workd on OSX and Linux.


Configuration
-------------
If you want to use something other than the leader key for the prefix, set it like so:

    let g:google_play_prefix = "F"

The script uses netcat (`nc`) to communicate.  If your OS doesn't have access to netcat,
you can override the binary to use by setting this in your ~/.vimrc:

    let g:google_play_net_exec = "netcat.exe"

Note that it's much preferred to use netcat as there's no guarantee your replacement will work.


Notes
-----
The perceptive developer will note that in the Git checkout includes the Chrome Extension code.  The reasons the steps
suggest installing it from the Chrome Store are to have extension IDs match up (the Vim plugin depends on it) and to make it easier
for you to update.

In its current state, the Pyhton script will die if you update/alter the Extension while Chrome is running.  The way around this is to execute:

    sudo ~/.vim/bundle/vim-google-play/chrome/host/kill.sh

Then open the Chrome Extensions panel and reload it (or restart Chrome).  This annoyance is being worked on.
