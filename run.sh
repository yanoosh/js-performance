#!/usr/bin/sh -x

for script in $@
do
    date >> ${script}.result
    time -v -a -o ${script}.result node ${script}
done

