#!/bin/bash

declare -a students=(ashley jason fock ting sam daniel tim chih-hui limitching orin ming zhong alison meng-tzu jiachien flyingdog sabrina scott frank) 

rm -r ./students
mkdir students
cd students

for i in "${students[@]}"
do
   :
   echo add folder: students/${i} 
   mkdir ${i}
   touch ${i}/README.md
done

cd ..
git add students
git ci -m "add students folders"
git push origin main

for i in "${students[@]}"
do
   :
   echo ${i}_develop
   git br ${i}_develop
   git push origin ${i}_develop
done
