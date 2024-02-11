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

starship init fish | source

set -x PATH $PATH "/home/woozy/.local/bin"
set -x PATH $PATH "./local/bin:/usr/lib"
set -x LIBRARY_PATH $LIBRARY_PATH "/usr/lib:/usr/local/lib:~/.local/lib"

alias ls="eza -lh"
alias ll="eza"
alias la="eza -lha"
alias conf="code --file-uri ~/.config/conf.code-workspace" 
alias cs="cd ~/002"
alias cs44="cd ~/002/S_cs4644"
alias cs00="cd ~/002/S_cs4000"
alias c="clear"
