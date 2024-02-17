set fish_greeting

if status is-interactive
    # Commands to run in interactive sessions can go here
end

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
if test -f /home/woozy/miniconda3/bin/conda
    eval /home/woozy/miniconda3/bin/conda "shell.fish" "hook" $argv | source
else
    if test -f "/home/woozy/miniconda3/etc/fish/conf.d/conda.fish"
        . "/home/woozy/miniconda3/etc/fish/conf.d/conda.fish"
    else
        set -x PATH "/home/woozy/miniconda3/bin" $PATH
    end
end
# <<< conda initialize <<<

set -x PATH $PATH "/home/woozy/.local/bin"
set -x PATH $PATH "./local/bin:/usr/lib"
set -x LIBRARY_PATH $LIBRARY_PATH "/usr/lib:/usr/local/lib:~/.local/lib"

starship init fish | source