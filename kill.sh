ps aux | grep [p]ython | grep vim_play | awk '{print $2}' | xargs kill -9
