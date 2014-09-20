#!/usr/bin/sh -x

for script in $@
do
    echo ${script}
#    cat ${script}
    date >> ${script}.result
    node ${script} | tee -a ${script}.result
    node ${script} | tee -a ${script}.result
    echo ""
done

