if exists('g:loaded_google_play') || &cp
  finish
endif
let g:loaded_google_play = 1

if !exists('g:google_play_net_exec')
  let g:google_play_net_exec = 'nc'
endif

function! s:GPVim(command)
  let output = system('echo ' . a:command . ' | ' . g:google_play_net_exec . ' 127.0.0.1 8080')
  echom output
endfunction

nnoremap <script> <silent> <leader><Space>   :call <sid>GPVim('play')<CR>
nnoremap <script> <silent> <leader><Left>    :call <sid>GPVim('previous')<CR>
nnoremap <script> <silent> <leader><Right>   :call <sid>GPVim('next')<CR>
nnoremap <script> <silent> <leader><Up>      :call <sid>GPVim('shuffle')<CR>
