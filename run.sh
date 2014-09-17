#!/usr/bin/sh -x

for script in $@
do
    echo ${script}
    cat ${script}
    echo ""
    date >> ${script}.result
    time -f 't:%U m:%MKB' -a -o ${script}.result node ${script}; tail -n1 ${script}.result
    time -f 't:%U m:%MKB' -a -o ${script}.result node ${script}; tail -n1 ${script}.result
done

