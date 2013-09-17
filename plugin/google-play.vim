if has("unix")
  let s:uname = system("uname")
else
  let s:uname = 'windows'
endif

if exists('g:loaded_google_play') || &cp
  finish
endif
let g:loaded_google_play = 1

if !exists('g:google_play_prefix')
  let g:google_play_prefix = "<leader>"
endif

if !exists('g:google_play_net_exec')
  let g:google_play_net_exec = 'nc'
endif

if !exists('g:google_play_timeout')
  if s:uname == "Darwin"
    " Mac users need to install coreutils via homebrew or another package
    " manager.
    let g:google_play_timeout = 'gtimeout'
  elseif s:uname == 'Linux'
    let g:google_play_timeout = 'timeout'
  endif
endif

function! s:GPVim(command)
  let output = system(g:google_play_timeout . ' 2 bash -c "echo ' . a:command . ' | ' . g:google_play_net_exec . ' 127.0.0.1 8123"')
  echom output
endfunction

function! s:MakeMapping(key, command)
  exe "nnoremap <script> <silent> " . g:google_play_prefix . a:key . " :call <sid>GPVim('" . a:command . "')<CR>"
endfunction

call s:MakeMapping('<space>', 'play')
call s:MakeMapping('<left>', 'previous')
call s:MakeMapping('<right>', 'next')
call s:MakeMapping('<up>', 'louder')
call s:MakeMapping('<down>', 'softer')
call s:MakeMapping('8', 'shuffle')
