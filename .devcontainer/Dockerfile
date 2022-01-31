# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.166.1/containers/javascript-node/.devcontainer/base.Dockerfile
# LP-DEV_CONTAINER-HINT refrain from using "latest"-tag here
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14-buster

ARG NODE_VERSION
ARG WORKSPACE_NAME

# LP-DEV_CONTAINER-HINT Install syntax-highlighting/autosuggestions plugins for ZSH and make ZSH of the container use the .devcontainer/.zshrc config
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions \
    && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting \
    && rm ~/.zshrc \ 
    && ln -s /workspaces/${WORKSPACE_NAME}/.devcontainer/.zshrc ~/.zshrc

# LP-DEV_CONTAINER-HINT: Links bash config that enforces the usage of zsh in the container
RUN rm ~/.bashrc \ 
    && ln -s /workspaces/${WORKSPACE_NAME}/.devcontainer/.bashrc ~/.bashrc

# LP-DEV_CONTAINER-HINT installs the node version defined in .devcontainer/devcontainer.json
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} && nvm use v${NODE_VERSION}"
