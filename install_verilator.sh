#!/bin/bash

ubt20_64_package_list=("git" "perl" "python3" "make" "g++" "libfl2" "libfl-dev" "zlibc" "zlib1g" "zlib1g-dev" "ccache" "libgoogle-perftools-dev" "numactl" "perl-doc")

if !(cat /etc/*release | grep 'Ubuntu 20.04'); then
    echo "Your Linux branch does not meet the requirements, please use Ubuntu 20.04."
    exit 1
fi

sudo apt-get update

for package in ${ubt20_64_package_list[@]} ; do
    dpkg -s "$package" >/dev/null 2>&1 && {
        echo "$package has been installed."
    } || {
        sudo apt-get --yes install $package
    }
done

echo "Installing Verilator."
sudo dpkg -i verilator_4_204_amd64.deb
echo "finish!"
